$().ready(function () {
    
    $("#contactForm").validate({
        rules: {
            name: { required: true, 
                minlength: 2 },
         
            email: {
                required: true,
                email: true
            },
           
            phone: {
                required: true,
                rangelength: [10, 10]

            },
            address: "required",
            
        },
        messages: {
            name: {
                required: "Vui lòng nhập Họ Và Tên .",
                minlength: "Họ Và Tên của bạn tối thiểu 2 kí tự"
            },
          
            email: {
                email: "Vui lòng nhập địa chỉ email.",
                required: "email có dạng @."
            },
           
            phone: {
                required: "Vui lòng nhập số điện thoại.",
                rangelength: "Vui lòng nhập số điện thoại chính xác ( 10 kí tự )."
            },
            address: "Vui lòng nhập địa chỉ của bạn.",
    
        }
    });

});