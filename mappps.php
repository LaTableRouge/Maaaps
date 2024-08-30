<?php

if (!defined('ABSPATH')) {
    exit;
} // Exit if accessed directly

/**
 * Plugin Name: Mappps
 * Plugin URI: https://github.com/LaTableRouge/Mappps
 * Description: A plugin that dsiplay maps
 * Tags: leaflet, block, openstreetmap, map, maps, map block
 * Author: LaTableRouge
 * Author URI: https://mlnop.fr/
 * Requires at least: 6.2
 * Tested up to: 6.6.1
 * Requires PHP: 8.0
 * Version: 1.1.0
 * Stable tag: 0.0.10
 * Text Domain: mappps
 * Domain Path: /lang
 * License: GPLv2 or later
 */

/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version
2 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
with this program. If not, visit: https://www.gnu.org/licenses/

Copyright 2024 Monzilla Media. All rights reserved.
*/

if (!function_exists('get_plugin_data')) {
    require_once ABSPATH . 'wp-admin/includes/plugin.php';
}
define('MPPPS_PATH', plugin_dir_path(__FILE__));
define('MPPPS_URL', plugin_dir_url(__FILE__));
define('MPPPS_BLOCKS_PATH', MPPPS_PATH . 'build/blocks');
define('MPPPS_LANG_PATH', MPPPS_PATH . 'lang');
define('MPPPS_BASE_NAME', basename(dirname(__FILE__)));

require MPPPS_PATH . 'includes/load-textdomain.php';

/*
* ====== Admin page
* Register page
* Enqueue assets
*/
require MPPPS_PATH . 'includes/register-page.php';
require MPPPS_PATH . 'includes/enqueue-assets.php';

/*
* ====== Blocks
* Register a new block category
* Enqueue react blocks
*/
require MPPPS_PATH . 'includes/custom-fields/coordinates.php';
require MPPPS_PATH . 'includes/blocks/categories-register.php';
require MPPPS_PATH . 'includes/blocks/blocks-register.php';
