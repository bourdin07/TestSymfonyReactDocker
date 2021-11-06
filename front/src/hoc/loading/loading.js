import React, { useState, useCallback } from "react";
import '../hoc.css';
import Loading from "../../components/layout/Loading/Loading";
import { useHistory } from "react-router";
import { connect } from "react-redux";

const loading = (Component, loading = true, message = null) => connect(mapStateToProps)((props) => {
  const [isLoading, setIsLoading] = useState(loading);
  const [messageDisplayed, setMessageDisplayed] = useState(message);
  const history = useHistory();

  const navigate = (url, storageName) => {
    let paramPage = sessionStorage.getItem(storageName);
    history.push(`${url}${paramPage ? `?page=${paramPage}` : ``}`);
  }

  const handleSetIsLoading = (b, m) => {
    setIsLoading(b);
    if (m) setMessageDisplayed(m);
  }

  return (
    <div>
      {isLoading && <Loading message={messageDisplayed} />}
      <div className={isLoading ? 'hoc-invisible' : 'hoc-visible'}>
        <Component {...props}
          setIsLoading={useCallback((b, m) => handleSetIsLoading(b, m), [])}
          paramPage={{
            page: (new URLSearchParams(window.location.search).get('page') ? +new URLSearchParams(window.location.search).get('page') : 1),
            size: sessionStorage.getItem('pageSize') ? sessionStorage.getItem('pageSize') : 25,
            sorts: [],
            currentSort: null,
          }}
          navigate={navigate}
        />
      </div>
    </div>
  )
})
const mapStateToProps = (state) => {
  return { pageSize: state.user.pageSize }
}

export default loading;
