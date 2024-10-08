// JavaScript Document

/**
 * @file
 * Custom scripts for theme.
 */
$(function() {
  // Dropdowns
  $('[data-js="nav-trigger"]').click(function(e) {
    e.stopPropagation();
    if ($(this).hasClass('active')) {
      closeMenu();
    }
    else {
      $('.header__nav').slideDown(300);
      $('.header__nav-trigger').addClass('active');
    }
  });

  function closeMenu() {
    $('.header__nav').slideUp(300);
    $('.header__nav-trigger').removeClass('active');
  }

  $(document.body).click( function(e) {
    closeMenu();
  });

  $('.header__nav').click( function(e) {
    e.stopPropagation();
  });

  $('[data-js="subnav-trigger"]').click(function() {
    // If the clicked trigger's dropdown is open, close dropdown and toggle icon back to default
    if ($(this).parent().parent().hasClass('active')) {
      $(this).parent().parent().removeClass('active');
      if ($(this).hasClass('icon-double-angle-up')) {
        $(this).removeClass('icon-double-angle-up').addClass('icon-double-angle-down');
      } else {
        $(this).removeClass('icon-angle-up').addClass('icon-angle-down');
      }
    }
    // If the clicked trigger's dropdown is closed, close any open dropdowns and open the clicked
    else {
      $(this).closest('ul').find('.active').removeClass('active');
      $(this).closest('ul').find('.icon-angle-up').removeClass('icon-angle-up').addClass('icon-angle-down');
      $(this).closest('ul').find('.icon-double-angle-up').removeClass('icon-double-angle-up').addClass('icon-double-angle-down');
      $(this).parent().parent().addClass('active');
      if ($(this).hasClass('icon-double-angle-down')) {
        $(this).removeClass('icon-double-angle-down').addClass('icon-double-angle-up');
      } else {
        $(this).removeClass('icon-angle-down').addClass('icon-angle-up');
      }
    }

    // Auto scroll to selected nav item if it is a top-level item
    if ($(this).hasClass('icon-angle-up') || $(this).hasClass('icon-angle-down')) {
      var selectedItemPos = $(this).closest('li').position().top;
      $('.header__nav').animate({scrollTop: selectedItemPos});
    }

    return false;
  });

});
