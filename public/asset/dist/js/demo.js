/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */

/* eslint-disable camelcase */

(function ($) {
  'use strict'

  setTimeout(function () {
    if (window.___browserSync___ === undefined && Number(localStorage.getItem('AdminLTE:Demo:MessageShowed')) < Date.now()) {
      localStorage.setItem('AdminLTE:Demo:MessageShowed', (Date.now()) + (15 * 60 * 1000))
      // eslint-disable-next-line no-alert
      alert('You load AdminLTE\'s "demo.js", \nthis file is only created for testing purposes!')
    }
  }, 1000)

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  function createSkinBlock(colors, callback, noneSelected) {
    var $block = $('<select />', {
      className: noneSelected ? 'custom-select mb-3 border-0' : 'custom-select mb-3 text-light border-0 ' + colors[0].replace(/accent-|navbar-/, 'bg-')
    })

    if (noneSelected) {
      var $default = $('<option />', {
        text: 'None Selected'
      })

      $block.append($default)
    }

    colors.forEach(function (color) {
      var $color = $('<option />', {
        className: (typeof color === 'object' ? color.join(' ') : color).replace('navbar-', 'bg-').replace('accent-', 'bg-'),
        text: capitalizeFirstLetter((typeof color === 'object' ? color.join(' ') : color).replace(/navbar-|accent-|bg-/, '').replace('-', ' '))
      })

      $block.append($color)
    })
    if (callback) {
      $block.on('change', callback)
    }

    return $block
  }

  var $sidebar = $('.control-sidebar')
  var $container = $('<div />', {
    className: 'p-3 control-sidebar-content'
  })

  $sidebar.append($container)

  // Checkboxes

  $container.append(
    '<h5>Customize AdminLTE</h5><hr className="mb-2"/>'
  )

  var $dark_mode_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasclassName('dark-mode'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addclassName('dark-mode')
    } else {
      $('body').removeclassName('dark-mode')
    }
  })
  var $dark_mode_container = $('<div />', { className: 'mb-4' }).append($dark_mode_checkbox).append('<span>Dark Mode</span>')
  $container.append($dark_mode_container)

  $container.append('<h6>Header Options</h6>')
  var $header_fixed_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasclassName('layout-navbar-fixed'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addclassName('layout-navbar-fixed')
    } else {
      $('body').removeclassName('layout-navbar-fixed')
    }
  })
  var $header_fixed_container = $('<div />', { className: 'mb-1' }).append($header_fixed_checkbox).append('<span>Fixed</span>')
  $container.append($header_fixed_container)

  var $dropdown_legacy_offset_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasclassName('dropdown-legacy'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addclassName('dropdown-legacy')
    } else {
      $('.main-header').removeclassName('dropdown-legacy')
    }
  })
  var $dropdown_legacy_offset_container = $('<div />', { className: 'mb-1' }).append($dropdown_legacy_offset_checkbox).append('<span>Dropdown Legacy Offset</span>')
  $container.append($dropdown_legacy_offset_container)

  var $no_border_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasclassName('border-bottom-0'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addclassName('border-bottom-0')
    } else {
      $('.main-header').removeclassName('border-bottom-0')
    }
  })
  var $no_border_container = $('<div />', { className: 'mb-4' }).append($no_border_checkbox).append('<span>No border</span>')
  $container.append($no_border_container)

  $container.append('<h6>Sidebar Options</h6>')

  var $sidebar_collapsed_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasclassName('sidebar-collapse'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addclassName('sidebar-collapse')
      $(window).trigger('resize')
    } else {
      $('body').removeclassName('sidebar-collapse')
      $(window).trigger('resize')
    }
  })
  var $sidebar_collapsed_container = $('<div />', { className: 'mb-1' }).append($sidebar_collapsed_checkbox).append('<span>Collapsed</span>')
  $container.append($sidebar_collapsed_container)

  $(document).on('collapsed.lte.pushmenu', '[data-widget="pushmenu"]', function () {
    $sidebar_collapsed_checkbox.prop('checked', true)
  })
  $(document).on('shown.lte.pushmenu', '[data-widget="pushmenu"]', function () {
    $sidebar_collapsed_checkbox.prop('checked', false)
  })

  var $sidebar_fixed_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasclassName('layout-fixed'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addclassName('layout-fixed')
      $(window).trigger('resize')
    } else {
      $('body').removeclassName('layout-fixed')
      $(window).trigger('resize')
    }
  })
  var $sidebar_fixed_container = $('<div />', { className: 'mb-1' }).append($sidebar_fixed_checkbox).append('<span>Fixed</span>')
  $container.append($sidebar_fixed_container)

  var $sidebar_mini_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasclassName('sidebar-mini'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addclassName('sidebar-mini')
    } else {
      $('body').removeclassName('sidebar-mini')
    }
  })
  var $sidebar_mini_container = $('<div />', { className: 'mb-1' }).append($sidebar_mini_checkbox).append('<span>Sidebar Mini</span>')
  $container.append($sidebar_mini_container)

  var $sidebar_mini_md_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasclassName('sidebar-mini-md'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addclassName('sidebar-mini-md')
    } else {
      $('body').removeclassName('sidebar-mini-md')
    }
  })
  var $sidebar_mini_md_container = $('<div />', { className: 'mb-1' }).append($sidebar_mini_md_checkbox).append('<span>Sidebar Mini MD</span>')
  $container.append($sidebar_mini_md_container)

  var $sidebar_mini_xs_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasclassName('sidebar-mini-xs'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addclassName('sidebar-mini-xs')
    } else {
      $('body').removeclassName('sidebar-mini-xs')
    }
  })
  var $sidebar_mini_xs_container = $('<div />', { className: 'mb-1' }).append($sidebar_mini_xs_checkbox).append('<span>Sidebar Mini XS</span>')
  $container.append($sidebar_mini_xs_container)

  var $flat_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasclassName('nav-flat'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addclassName('nav-flat')
    } else {
      $('.nav-sidebar').removeclassName('nav-flat')
    }
  })
  var $flat_sidebar_container = $('<div />', { className: 'mb-1' }).append($flat_sidebar_checkbox).append('<span>Nav Flat Style</span>')
  $container.append($flat_sidebar_container)

  var $legacy_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasclassName('nav-legacy'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addclassName('nav-legacy')
    } else {
      $('.nav-sidebar').removeclassName('nav-legacy')
    }
  })
  var $legacy_sidebar_container = $('<div />', { className: 'mb-1' }).append($legacy_sidebar_checkbox).append('<span>Nav Legacy Style</span>')
  $container.append($legacy_sidebar_container)

  var $compact_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasclassName('nav-compact'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addclassName('nav-compact')
    } else {
      $('.nav-sidebar').removeclassName('nav-compact')
    }
  })
  var $compact_sidebar_container = $('<div />', { className: 'mb-1' }).append($compact_sidebar_checkbox).append('<span>Nav Compact</span>')
  $container.append($compact_sidebar_container)

  var $child_indent_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasclassName('nav-child-indent'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addclassName('nav-child-indent')
    } else {
      $('.nav-sidebar').removeclassName('nav-child-indent')
    }
  })
  var $child_indent_sidebar_container = $('<div />', { className: 'mb-1' }).append($child_indent_sidebar_checkbox).append('<span>Nav Child Indent</span>')
  $container.append($child_indent_sidebar_container)

  var $child_hide_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasclassName('nav-collapse-hide-child'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addclassName('nav-collapse-hide-child')
    } else {
      $('.nav-sidebar').removeclassName('nav-collapse-hide-child')
    }
  })
  var $child_hide_sidebar_container = $('<div />', { className: 'mb-1' }).append($child_hide_sidebar_checkbox).append('<span>Nav Child Hide on Collapse</span>')
  $container.append($child_hide_sidebar_container)

  var $no_expand_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-sidebar').hasclassName('sidebar-no-expand'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-sidebar').addclassName('sidebar-no-expand')
    } else {
      $('.main-sidebar').removeclassName('sidebar-no-expand')
    }
  })
  var $no_expand_sidebar_container = $('<div />', { className: 'mb-4' }).append($no_expand_sidebar_checkbox).append('<span>Disable Hover/Focus Auto-Expand</span>')
  $container.append($no_expand_sidebar_container)

  $container.append('<h6>Footer Options</h6>')
  var $footer_fixed_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasclassName('layout-footer-fixed'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addclassName('layout-footer-fixed')
    } else {
      $('body').removeclassName('layout-footer-fixed')
    }
  })
  var $footer_fixed_container = $('<div />', { className: 'mb-4' }).append($footer_fixed_checkbox).append('<span>Fixed</span>')
  $container.append($footer_fixed_container)

  $container.append('<h6>Small Text Options</h6>')

  var $text_sm_body_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasclassName('text-sm'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addclassName('text-sm')
    } else {
      $('body').removeclassName('text-sm')
    }
  })
  var $text_sm_body_container = $('<div />', { className: 'mb-1' }).append($text_sm_body_checkbox).append('<span>Body</span>')
  $container.append($text_sm_body_container)

  var $text_sm_header_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasclassName('text-sm'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addclassName('text-sm')
    } else {
      $('.main-header').removeclassName('text-sm')
    }
  })
  var $text_sm_header_container = $('<div />', { className: 'mb-1' }).append($text_sm_header_checkbox).append('<span>Navbar</span>')
  $container.append($text_sm_header_container)

  var $text_sm_brand_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.brand-link').hasclassName('text-sm'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.brand-link').addclassName('text-sm')
    } else {
      $('.brand-link').removeclassName('text-sm')
    }
  })
  var $text_sm_brand_container = $('<div />', { className: 'mb-1' }).append($text_sm_brand_checkbox).append('<span>Brand</span>')
  $container.append($text_sm_brand_container)

  var $text_sm_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasclassName('text-sm'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addclassName('text-sm')
    } else {
      $('.nav-sidebar').removeclassName('text-sm')
    }
  })
  var $text_sm_sidebar_container = $('<div />', { className: 'mb-1' }).append($text_sm_sidebar_checkbox).append('<span>Sidebar Nav</span>')
  $container.append($text_sm_sidebar_container)

  var $text_sm_footer_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-footer').hasclassName('text-sm'),
    className: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-footer').addclassName('text-sm')
    } else {
      $('.main-footer').removeclassName('text-sm')
    }
  })
  var $text_sm_footer_container = $('<div />', { className: 'mb-4' }).append($text_sm_footer_checkbox).append('<span>Footer</span>')
  $container.append($text_sm_footer_container)

  // Color Arrays

  var navbar_dark_skins = [
    'navbar-primary',
    'navbar-secondary',
    'navbar-info',
    'navbar-success',
    'navbar-danger',
    'navbar-indigo',
    'navbar-purple',
    'navbar-pink',
    'navbar-navy',
    'navbar-lightblue',
    'navbar-teal',
    'navbar-cyan',
    'navbar-dark',
    'navbar-gray-dark',
    'navbar-gray'
  ]

  var navbar_light_skins = [
    'navbar-light',
    'navbar-warning',
    'navbar-white',
    'navbar-orange'
  ]

  var sidebar_colors = [
    'bg-primary',
    'bg-warning',
    'bg-info',
    'bg-danger',
    'bg-success',
    'bg-indigo',
    'bg-lightblue',
    'bg-navy',
    'bg-purple',
    'bg-fuchsia',
    'bg-pink',
    'bg-maroon',
    'bg-orange',
    'bg-lime',
    'bg-teal',
    'bg-olive'
  ]

  var accent_colors = [
    'accent-primary',
    'accent-warning',
    'accent-info',
    'accent-danger',
    'accent-success',
    'accent-indigo',
    'accent-lightblue',
    'accent-navy',
    'accent-purple',
    'accent-fuchsia',
    'accent-pink',
    'accent-maroon',
    'accent-orange',
    'accent-lime',
    'accent-teal',
    'accent-olive'
  ]

  var sidebar_skins = [
    'sidebar-dark-primary',
    'sidebar-dark-warning',
    'sidebar-dark-info',
    'sidebar-dark-danger',
    'sidebar-dark-success',
    'sidebar-dark-indigo',
    'sidebar-dark-lightblue',
    'sidebar-dark-navy',
    'sidebar-dark-purple',
    'sidebar-dark-fuchsia',
    'sidebar-dark-pink',
    'sidebar-dark-maroon',
    'sidebar-dark-orange',
    'sidebar-dark-lime',
    'sidebar-dark-teal',
    'sidebar-dark-olive',
    'sidebar-light-primary',
    'sidebar-light-warning',
    'sidebar-light-info',
    'sidebar-light-danger',
    'sidebar-light-success',
    'sidebar-light-indigo',
    'sidebar-light-lightblue',
    'sidebar-light-navy',
    'sidebar-light-purple',
    'sidebar-light-fuchsia',
    'sidebar-light-pink',
    'sidebar-light-maroon',
    'sidebar-light-orange',
    'sidebar-light-lime',
    'sidebar-light-teal',
    'sidebar-light-olive'
  ]

  // Navbar Variants

  $container.append('<h6>Navbar Variants</h6>')

  var $navbar_variants = $('<div />', {
    className: 'd-flex'
  })
  var navbar_all_colors = navbar_dark_skins.concat(navbar_light_skins)
  var $navbar_variants_colors = createSkinBlock(navbar_all_colors, function () {
    var color = $(this).find('option:selected').attr('className')
    var $main_header = $('.main-header')
    $main_header.removeclassName('navbar-dark').removeclassName('navbar-light')
    navbar_all_colors.forEach(function (color) {
      $main_header.removeclassName(color)
    })

    $(this).removeclassName().addclassName('custom-select mb-3 text-light border-0 ')

    if (navbar_dark_skins.indexOf(color) > -1) {
      $main_header.addclassName('navbar-dark')
      $(this).addclassName(color).addclassName('text-light')
    } else {
      $main_header.addclassName('navbar-light')
      $(this).addclassName(color)
    }

    $main_header.addclassName(color)
  })

  var active_navbar_color = null
  $('.main-header')[0].classNameList.forEach(function (classNameName) {
    if (navbar_all_colors.indexOf(classNameName) > -1 && active_navbar_color === null) {
      active_navbar_color = classNameName.replace('navbar-', 'bg-')
    }
  })

  $navbar_variants_colors.find('option.' + active_navbar_color).prop('selected', true)
  $navbar_variants_colors.removeclassName().addclassName('custom-select mb-3 text-light border-0 ').addclassName(active_navbar_color)

  $navbar_variants.append($navbar_variants_colors)

  $container.append($navbar_variants)

  // Sidebar Colors

  $container.append('<h6>Accent Color Variants</h6>')
  var $accent_variants = $('<div />', {
    className: 'd-flex'
  })
  $container.append($accent_variants)
  $container.append(createSkinBlock(accent_colors, function () {
    var color = $(this).find('option:selected').attr('className')
    var $body = $('body')
    accent_colors.forEach(function (skin) {
      $body.removeclassName(skin)
    })

    var accent_color_className = color.replace('bg-', 'accent-')

    $body.addclassName(accent_color_className)
  }, true))

  var active_accent_color = null
  $('body')[0].classNameList.forEach(function (classNameName) {
    if (accent_colors.indexOf(classNameName) > -1 && active_accent_color === null) {
      active_accent_color = classNameName.replace('navbar-', 'bg-')
    }
  })

  // $accent_variants.find('option.' + active_accent_color).prop('selected', true)
  // $accent_variants.removeclassName().addclassName('custom-select mb-3 text-light border-0 ').addclassName(active_accent_color)

  $container.append('<h6>Dark Sidebar Variants</h6>')
  var $sidebar_variants_dark = $('<div />', {
    className: 'd-flex'
  })
  $container.append($sidebar_variants_dark)
  var $sidebar_dark_variants = createSkinBlock(sidebar_colors, function () {
    var color = $(this).find('option:selected').attr('className')
    var sidebar_className = 'sidebar-dark-' + color.replace('bg-', '')
    var $sidebar = $('.main-sidebar')
    sidebar_skins.forEach(function (skin) {
      $sidebar.removeclassName(skin)
      $sidebar_light_variants.removeclassName(skin.replace('sidebar-dark-', 'bg-')).removeclassName('text-light')
    })

    $(this).removeclassName().addclassName('custom-select mb-3 text-light border-0').addclassName(color)

    $sidebar_light_variants.find('option').prop('selected', false)
    $sidebar.addclassName(sidebar_className)
    $('.sidebar').removeclassName('os-theme-dark').addclassName('os-theme-light')
  }, true)
  $container.append($sidebar_dark_variants)

  var active_sidebar_dark_color = null
  $('.main-sidebar')[0].classNameList.forEach(function (classNameName) {
    var color = classNameName.replace('sidebar-dark-', 'bg-')
    if (sidebar_colors.indexOf(color) > -1 && active_sidebar_dark_color === null) {
      active_sidebar_dark_color = color
    }
  })

  $sidebar_dark_variants.find('option.' + active_sidebar_dark_color).prop('selected', true)
  $sidebar_dark_variants.removeclassName().addclassName('custom-select mb-3 text-light border-0 ').addclassName(active_sidebar_dark_color)

  $container.append('<h6>Light Sidebar Variants</h6>')
  var $sidebar_variants_light = $('<div />', {
    className: 'd-flex'
  })
  $container.append($sidebar_variants_light)
  var $sidebar_light_variants = createSkinBlock(sidebar_colors, function () {
    var color = $(this).find('option:selected').attr('className')
    var sidebar_className = 'sidebar-light-' + color.replace('bg-', '')
    var $sidebar = $('.main-sidebar')
    sidebar_skins.forEach(function (skin) {
      $sidebar.removeclassName(skin)
      $sidebar_dark_variants.removeclassName(skin.replace('sidebar-light-', 'bg-')).removeclassName('text-light')
    })

    $(this).removeclassName().addclassName('custom-select mb-3 text-light border-0').addclassName(color)

    $sidebar_dark_variants.find('option').prop('selected', false)
    $sidebar.addclassName(sidebar_className)
    $('.sidebar').removeclassName('os-theme-light').addclassName('os-theme-dark')
  }, true)
  $container.append($sidebar_light_variants)

  var active_sidebar_light_color = null
  $('.main-sidebar')[0].classNameList.forEach(function (classNameName) {
    var color = classNameName.replace('sidebar-light-', 'bg-')
    if (sidebar_colors.indexOf(color) > -1 && active_sidebar_light_color === null) {
      active_sidebar_light_color = color
    }
  })

  if (active_sidebar_light_color !== null) {
    $sidebar_light_variants.find('option.' + active_sidebar_light_color).prop('selected', true)
    $sidebar_light_variants.removeclassName().addclassName('custom-select mb-3 text-light border-0 ').addclassName(active_sidebar_light_color)
  }

  var logo_skins = navbar_all_colors
  $container.append('<h6>Brand Logo Variants</h6>')
  var $logo_variants = $('<div />', {
    className: 'd-flex'
  })
  $container.append($logo_variants)
  var $clear_btn = $('<a />', {
    href: '#'
  }).text('clear').on('click', function (e) {
    e.preventDefault()
    var $logo = $('.brand-link')
    logo_skins.forEach(function (skin) {
      $logo.removeclassName(skin)
    })
  })

  var $brand_variants = createSkinBlock(logo_skins, function () {
    var color = $(this).find('option:selected').attr('className')
    var $logo = $('.brand-link')

    if (color === 'navbar-light' || color === 'navbar-white') {
      $logo.addclassName('text-black')
    } else {
      $logo.removeclassName('text-black')
    }

    logo_skins.forEach(function (skin) {
      $logo.removeclassName(skin)
    })

    if (color) {
      $(this).removeclassName().addclassName('custom-select mb-3 border-0').addclassName(color).addclassName(color !== 'navbar-light' && color !== 'navbar-white' ? 'text-light' : '')
    } else {
      $(this).removeclassName().addclassName('custom-select mb-3 border-0')
    }

    $logo.addclassName(color)
  }, true).append($clear_btn)
  $container.append($brand_variants)

  var active_brand_color = null
  $('.brand-link')[0].classNameList.forEach(function (classNameName) {
    if (logo_skins.indexOf(classNameName) > -1 && active_brand_color === null) {
      active_brand_color = classNameName.replace('navbar-', 'bg-')
    }
  })

  if (active_brand_color) {
    $brand_variants.find('option.' + active_brand_color).prop('selected', true)
    $brand_variants.removeclassName().addclassName('custom-select mb-3 text-light border-0 ').addclassName(active_brand_color)
  }
})(jQuery)