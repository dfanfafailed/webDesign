<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitb8eaa1d34abbdfffad24cb6f70411058
{
    public static $prefixLengthsPsr4 = array (
        'v' => 
        array (
            'voku\\helper\\' => 12,
        ),
        'S' => 
        array (
            'Symfony\\Component\\CssSelector\\' => 30,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'voku\\helper\\' => 
        array (
            0 => __DIR__ . '/..' . '/voku/simple_html_dom/src/voku/helper',
        ),
        'Symfony\\Component\\CssSelector\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/css-selector',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitb8eaa1d34abbdfffad24cb6f70411058::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitb8eaa1d34abbdfffad24cb6f70411058::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitb8eaa1d34abbdfffad24cb6f70411058::$classMap;

        }, null, ClassLoader::class);
    }
}