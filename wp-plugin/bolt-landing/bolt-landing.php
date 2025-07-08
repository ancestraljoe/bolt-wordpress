<?php
/**
 * Plugin Name: Bolt Landing
 * Description: Embeds the Bolt landing page using a shortcode.
 * Version: 1.0.0
 * Author: Bolt
 */

// Register shortcode.
function bolt_landing_shortcode() {
    // Plugin URL for assets.
    $plugin_url = plugin_dir_url(__FILE__);

    // Enqueue styles and scripts only when shortcode is used.
    wp_enqueue_style(
        'bolt-landing-style',
        $plugin_url . 'dist/assets/index-DHx0o1cY.css',
        array(),
        null
    );
    wp_enqueue_script(
        'bolt-landing-script',
        $plugin_url . 'dist/assets/index-BC5gZysM.js',
        array(),
        null,
        true
    );

    return '<div id="root"></div>';
}
add_shortcode('bolt_landing', 'bolt_landing_shortcode');
?>
