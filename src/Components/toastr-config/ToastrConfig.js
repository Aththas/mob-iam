import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import './ToastrConfig.css'

toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    timeOut: 3000,
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
    showDuration: 300,
    hideDuration: 300,
    tapToDismiss: false,
};

export default toastr;
