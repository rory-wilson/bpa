/************************************************************************
* For CSS purposes it can be very useful to add a 'hasJS' class to the HTML
* element allowing different styling options when JavaScript is enabled
*************************************************************************/
if (document.getElementsByTagName('html')[0].className.indexOf("hasJS") == -1) {
    document.getElementsByTagName('html')[0].className += " hasJS";
}

/************************************************************************
* Check if namespace already exists
*************************************************************************/
if (!lib) { var lib = {}; }

/************************************************************************
* Object
*************************************************************************/
lib.BPA = function () {
    var self = this;
    this.debugErrors = false;

    /************************************************************************
    * Constructor
    *************************************************************************/
    this.init = function () {
        $(document).ready(function () {
            self.ready();
        });
    };

    /************************************************************************
    * Once jquery is intialised
    *************************************************************************/
    this.ready = function () {
        self.debug("jquery ready");
        self.setupNavigation();
        self.progressiveEnhancement();
    };

    /************************************************************************
    * set up navigation
    *************************************************************************/
    this.setupNavigation = function () {
        self.debug("setup navigation");
    };

    /************************************************************************
    * Progressive enhancement
    *************************************************************************/
    this.progressiveEnhancement = function () {
        self.debug("progressive enhancement");

        $('#search').focus(function (event) {
            if ($(this).val() == "Search") $(this).val("");
        });
        $('#search').blur(function (event) {
            if ($(this).val() == "") $(this).val("Search");
        });

        $('.nolink').click(function (event) {
            event.preventDefault();
        });

        $(".lightbox").colorbox({ rel: 'lightbox', photo: 'true' });

        $('.showthumb').click(function (event) {
            event.preventDefault();
            $('.showthumb').parent().removeClass('selected');
            $(this).parent().addClass('selected');
            //$('.largelink').attr('href',$(this).attr('href'));
            $('.largethumb').attr('src', ($(this).attr('href')));
        });

        $('.fixedheight').jScrollPane({ hideFocus: true });

        $('.mosaic-block').mosaic({
            animation: 'slide'    //fade or slide
        });

        $('.newsitem a').click(function (e) {
            $('.newsimage').attr('src', $(this).attr('rel'));
            e.preventDefault();
        });

    };

    /************************************************************************
    * Allow for easy turning on/off of debugging information
    *************************************************************************/
    this.debug = function (myMessage) {
        if (this.debugErrors == true) {
            if ((typeof console != "undefined") && (typeof console.log == 'function')) {
                console.log(myMessage);
            }
            else {
                alert(myMessage);
            }
        }
    };

    /************************************************************************
    * Instantiate this Object
    *************************************************************************/
    this.init();
};

/************************************************************************
* Dropdown function
*************************************************************************/
$.fn.dropdown = function () {

    return this.each(function () {

        $(this).hover(function () {
            $(this).addClass("hover");
            $('> .dir', this).addClass("open");
            $('ul:first', this).css('visibility', 'visible');
        }, function () {
            $(this).removeClass("hover");
            $('.open', this).removeClass("open");
            $('ul:first', this).css('visibility', 'hidden');
        });

    });
};

/************************************************************************
* Create an instance of the object so we can use it to access data.
*************************************************************************/
var BPA = new lib.BPA();