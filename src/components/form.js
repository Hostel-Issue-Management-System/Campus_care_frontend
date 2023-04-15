import React ,{useState}from "react";
import "./form.css";
import { Button, Dropdown, Input, Page, setOptions } from '@mobiscroll/react-lite';



import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Form(){
    const [showToast, setShowToast] = useState(false);

    const handleSign = () => {
        toast.success('🦄 Wow so easy!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    };
  



return(<div className="container">

<Page>
            <div className="mbsc-grid mbsc-grid-fixed">
                <div className="mbsc-form-group">
                    <div className="mbsc-row mbsc-justify-content-center">
                        <div className="mbsc-col-md-10 mbsc-col-xl-8 mbsc-form-grid">
                            <div className="mbsc-form-group-title">Register-Complaint</div>
                            <div className="mbsc-row">
                                <div className="mbsc-col-md-6-mbsc-col-12">
                                    <Input type="text" label="Email" placeholder="Email" inputStyle="box" labelStyle="floating" />
                                </div>
                                <div className="mbsc-col-md-6-mbsc-col-12">
                                    <Input type="password" label="Password" placeholder="Password" passwordToggle="true" inputStyle="box" labelStyle="floating" />
                                </div>
                            </div>
                            <div className="mbsc-row">
                                <div className="mbsc-col-12">
                                    <Input type="text" label="Address" placeholder="Address" inputStyle="box" labelStyle="floating" />
                                </div>
                            </div>
                            <div className="mbsc-row">
                                <div className="mbsc-col-md-6 mbsc-col-12">
                                    <Input type="text" label="City" placeholder="City" inputStyle="box" labelStyle="floating" />
                                </div>
                                <div className="mbsc-col-md-4 mbsc-col-6">
                                    <Dropdown label="State" inputStyle="box" labelStyle="floating">
                                        <option value="Alabama">Alabama</option> 
                                        <option value="Alaska">Alaska</option>
                                        <option value="Arizona">Arizona</option> 
                                        <option value="Arkansas">Arkansas</option>
                                        <option value="California">California</option>
                                        <option value="Colorado">Colorado</option>
                                        <option value="Connecticut">Connecticut</option>
                                        <option value="Delaware">Delaware</option>
                                        <option value="Florida">Florida</option>
                                        <option value="Georgia">Georgia</option>
                                     
                                   
                                        <option value="Wyomin">Wyomin</option>
                                    </Dropdown>
                                </div>
                                <div className="mbsc-col-md-2 mbsc-col-6">
                                    <Input type="text" label="Zip" placeholder="Zip" inputStyle="box" labelStyle="floating" />
                                </div>
                            </div>
                            <Button onClick={handleSign}>Sign in</Button>
                            <ToastContainer position="bottom-center"
                                           autoClose={5000}
                                            hideProgressBar={false}
                                            newestOnTop={false}
                                            closeOnClick
                                            rtl={false}
                                            pauseOnFocusLoss
                                            draggable
                                            pauseOnHover
                                            theme="dark"/>
                        </div>
                    </div>
                </div>
                </div>
        </Page>
</div>

);

}
export default Form;