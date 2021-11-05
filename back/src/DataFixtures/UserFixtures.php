<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
// use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    /** @var UserPasswordHasherInterface */
    protected $encoder;

    public function __construct(UserPasswordHasherInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager): void
    {
        $users = [
            [
                "username" => "admin",
                "email" => "admin@local.com",
                "roles" => ["ROLE_ADMIN"],
                "isActive" => true
            ]
        ];

        foreach ($users as $key => $value) {
            $user = new User($value["username"]);
            $user->setEmail($value["email"]);
            $user->setPassword($this->encoder->hashPassword($user, "admin"));

            if (is_array($value['roles'])) {
                foreach ((array)$value['roles'] as $_role) {
                    $user->addRole($_role);
                }
            } else {
                $user->addRole($value['role']);
            }

            $manager->persist($user);
        }

        $manager->flush();
    }
}
