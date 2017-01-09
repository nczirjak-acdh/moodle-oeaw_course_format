// Javascript functions for onetopic course format

M.course = M.course || {};

M.course.format = M.course.format || {};

M.course.format.show_info = function(id) {

    var dialog = new M.core.dialogue({
                draggable    : true,
                headerContent: '<span>' + M.str.moodle.info + '</span>',
                bodyContent  : Y.Node.one('#' + id),
                centered     : true,
                width        : '480px',
                modal        : true,
                visible      : true
            });

    Y.Node.one('#' + id).show();

}

console.log('itttt');


    $(document).ready(function() {
        $('.menu_course_section_value').click(function() {
            alert($(this).attr("value"));
        });
    });




//Y.Node.one(this)