import * as lib from "/js/card-data.js";

// Expands the monster or spell/trap card that was clicked
$(".img-wrap").click(function() {
  var viewportWidth = $(window).width();
  var cardId = this.id;
  // determines which deck to access from lib (this class name must match an array name in lib)
  var deckType = document.getElementById(cardId).classList[2];
  var cardObj;
  switch(deckType) {
    case "vendread":
      // for each card (object type) in vendreadDeck array (in lib)
      jQuery.each(lib.vendreadDeck, function(index, value) {
        // assign cardObj the card in the vendreadDeck (value)
        // that equals the card clicked (cardId)
        if(value.id === cardId) {
          // cardObj is used to pass the values of the card at this index in
          // lib.vendreadDeck to the displayCard method (enlarges the details of the card)
          cardObj = value;
          return false;
        }
      });
    break;
    case "vampire":
      jQuery.each(lib.vampireDeck, function(index, value) {
        if(value.id === cardId) {
          cardObj = value;
          return false;
        }
      });
    break;
    case "sacredSoldier":
      jQuery.each(lib.sacredSoldierDeck, function(index, value) {
        if(value.id === cardId) {
          cardObj = value;
          return false;
        }
      });
    break;
    case "amazoness":
      jQuery.each(lib.amazonDeck, function(index, value) {
        if(value.id === cardId) {
          cardObj = value;
          return false;
        }
      });
    break;
    case "archfiends":
      jQuery.each(lib.archfiendDeck, function(index, value) {
        if(value.id === cardId) {
          cardObj = value;
          return false;
        }
      });
    break;
    case "dinos":
      jQuery.each(lib.dinoDeck, function(index, value) {
        if(value.id === cardId) {
          cardObj = value;
          return false;
        }
      });
    break;
    case "rezd":
      jQuery.each(lib.redEyesZombieDeck, function(index, value) {
        if(value.id === cardId) {
          cardObj = value;
          return false;
        }
      });
    break;
    case "specialDuel":
      jQuery.each(lib.specialDuelDeck, function(index, value) {
        if(value.id === cardId) {
          cardObj = value;
          return false;
        }
      });
    break;
    case "other":
      jQuery.each(lib.otherDuelDeck, function(index, value) {
        if(value.id === cardId) {
          cardObj = value;
          return false;
        }
      });
    break;
    default:
      console.log("Could not find deck type.");
  }

  var cardClickedId = "#" + cardId;
  if($(cardClickedId).hasClass("monster")) {
    displayMonsterCard(cardObj, viewportWidth);   // enlarges the card
  }
  else if($(cardClickedId).hasClass("spell-trap")) {
    displaySpellTrapCard(cardObj, viewportWidth);
  }
}); // end of click function

// accepts cardObj (assigned in the switch statement) and the viewportWidth
function displayMonsterCard(obj, vw) {
  // hide a previous opened monster or spell-trap slidedown when openeing this one
  $(".m-card-description").hide();
  $(".st-card-description").hide();
  $(".m-img-src").attr("src", obj.imgPath);
  $(".m-card-name").text(obj.name);
  $(".level").text(" " + obj.level);
  $(".attribute").text(" " + obj.attribute);
  $(".m-type").text(" " + obj.type);
  $(".m-card-effect").text(obj.effect);
  $(".atk").text(" " + obj.atk);
  $(".def").text(" " + obj.def);
  if(obj.summonRequirement === undefined) {
    $(".summonReq").hide();
    $(".summonReq").empty();
  } else {
    $(".summonReq").show();
    $(".summonReq").text(obj.summonRequirement);
  }
  $("html, body").animate({scrollTop: $("#deck-card-display").offset().top}, "slow");
  if(vw <= 750) {
    $(".m-card-description").removeClass("side-margins");
  }
  else {
    $(".m-card-description").addClass("side-margins");
  }
  $(".m-card-description").slideDown("slow", function() {
    $(".close-btn").click(function() {
      $(".m-card-description").slideUp();
    });
  });
}   // end displayMonsterCard

function displaySpellTrapCard(obj, vw) {
  $(".st-card-description").hide();
  $(".m-card-description").hide();
  $(".st-img-src").attr("src", obj.imgPath);
  $(".st-card-name").text(obj.name);
  $(".st-type").text(obj.type);
  $(".st-card-effect").text(obj.effect);
  $("html, body").animate({ scrollTop: $("#deck-card-display").offset().top }, "slow");
  if(vw <= 750) {
    $(".st-card-description").removeClass("side-margins");
  }
  else {
    $(".st-card-description").addClass("side-margins");
  }
  $(".st-card-description").slideDown("slow", function() {
    $(".close-btn").click(function() {
      $(".st-card-description").slideUp();
    });
  });
}   // end displaySpellTrapCard
