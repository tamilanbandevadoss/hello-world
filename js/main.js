$(function() {
  var t = {
	  "Home": {
		ar: "منزل"  
	  },
	  "Portfolio": {
		ar: "محفظة"  
	  },
	  "Blog": {
		ar: "بلوق"  
	  },
	  "Contact": {
		ar: "اتصال"  
	  },
	   "Second article": {
		ar: "المادة الثانية"  
	  },
     first_author: {
      en: "This was posted on the 2nd of March 2013 by Christian Vasile.",
      ar: "تم نشر هذا على 2 مارس 2013 من قبل فاسيلي المسيحية."
    },
     second_artical: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ar: "دعونا نرى ما يحب أو يرغب أو يسعى الألم، ولكن في بعض الأحيان تحدث بسبب الظروف التي الكدح والألم يمكن شراء له بعض السرور. لنأخذ مثالا تافها، والتي تتعهد منا من أي وقت مضى التمارين البدنية الشاقة، إلا الحصول على بعض المزايا من ذلك. والروح المعنوية من قبل سحر من المتعة هو موضع ترحيب الألم الذي لا ينتج متعة الناتجة."
    },
	   "First post": {
		ar: "أول وظيفة"  
	  },
     second_author: {
      en: "This was posted on the 5th of March 2013 by Christian Vasile",
      ar: "تم نشر هذا على 5 مارس 2013 من قبل المسيحية فاسيلي"
    },
     first_post: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ar: "دعونا نرى ما يحب أو يرغب أو يسعى الألم، ولكن في بعض الأحيان تحدث بسبب الظروف التي الكدح والألم يمكن شراء له بعض السرور. لنأخذ مثالا تافها، والتي تتعهد منا من أي وقت مضى التمارين البدنية الشاقة، إلا الحصول على بعض المزايا من ذلك. والروح المعنوية من قبل سحر من المتعة هو موضع ترحيب الألم الذي لا ينتج متعة الناتجة. والروح المعنوية من قبل سحر من المتعة هو موضع ترحيب الألم الذي لا ينتج متعة الناتجة."
    },
	 Top_sidebar: {
      en: "Top Sidebar.",
      ar: ".أعلى الشريط الجانبي"
    },
	 Middle_sidebar: {
      en: "Middle Sidebar.",
      ar: ".الشريط الجانبي الأوسط"
    },
	 Bottom_sidebar: {
      en: "Bottom Sidebar.",
      ar: ".الشريط الجانبي السفلي"
    },
	 Top_sidebar_content: {
      en: "Discover how to use new techniques to achieve an outstanding, cross-browser HTML5.",
      ar: ".اكتشاف كيفية استخدام تقنيات جديدة لتحقيق المعلقة، HTML5 عبر متصفح"
    }, 
	 Middle_sidebar_content: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ar: ".دعونا نرى ما يحب أو يرغب أو يسعى الألم، ولكن في بعض الأحيان تحدث بسبب الظروف التي الكدح والألم يمكن شراء له بعض السرور"
    },
	 Bottom_sidebar_content: {
      en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod expedita distinctio.",
      ar: ".دعونا نرى ما يحب أو يرغب أو يسعى الألم، ولكن لأن تعاليم الفعلي للمن السهل التمييز"
    }/*,
	Name: {
      en: "Name",
      ar: "اسم"
    },
	Email: {
      en: "Email",
      ar: "البريد الإلكتروني"
    },
	Age: {
      en: "Age",
      ar: "سن"
    },
	StuId: {
      en: "StuId",
      ar: "رقم الطالب"
    }*/
  };
  
  var _t = $('body').translate({lang: "en", t: t});
  var str = _t.g("translate");
  console.log(str);

  $(".lang_selector").click(function(ev) {
    var lang = $(this).attr("data-value");
    _t.lang(lang);

    console.log(lang);
    ev.preventDefault();
  });

});
