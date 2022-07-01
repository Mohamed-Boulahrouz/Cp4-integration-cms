<?php

  function oprofile_load_assets()
  {
    // Enqueue CSS
    wp_enqueue_style( "main-css", get_theme_file_uri( "assets/css/main.css" ) );
  
    // Enqueue JS
    wp_enqueue_script( "main-js", get_theme_file_uri( "assets/js/main.js" ), [], false, true );
    wp_enqueue_script( "nav-js", get_theme_file_uri( "assets/js/nav.js" ), [], false, true );
    wp_enqueue_script( "carousel-js", get_theme_file_uri( "assets/js/carousel.js" ), [], false, true );
  }
  add_action( "wp_enqueue_scripts", "oprofile_load_assets" );
