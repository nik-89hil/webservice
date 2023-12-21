import React, { useEffect } from 'react'
import './admin.css'
import axios from 'axios';
import Client from '../component/Client'
import { useDispatch, useSelector } from 'react-redux'
import { ADMIN } from '../redux/action/admin'
import {rooturlserver} from '../component/axio'


const Admin = () => {
    const [client, setClient] = React.useState(false);
    const [service, setService] = React.useState(false);
    const dispatch = useDispatch();
    const { data, err, loading } = useSelector((state) => state.admin);


    const [admin, setAdmin] = React.useState({
        name: "",
        email: "",
        password: ""
    });
    const [product, setProduct] = React.useState({
        prodimg: "",
        prodname: "",
        prodabout: ""
    })
    const [tool, setTool] = React.useState({
        toolname: "",
        color: "",
        toollink: "",
        abouttool: ""
    })



    const handleadmin = (e) => {
        e.preventDefault();
        setAdmin({
            ...admin,
            [e.target.name]: e.target.value
        })
    }

    const handleproduct = (e) => {
        e.preventDefault();
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handletool = (e) => {
        e.preventDefault();
        setTool({
            ...tool,
            [e.target.name]: e.target.value
        })
    }

    const submitadmin = async (e) => {
        e.preventDefault();
        dispatch(ADMIN(admin))
    }

    const submitproduct = async (e) => {
        e.preventDefault();
        const result = await axios({
            url: `${rooturlserver}/api/admin/product`,
            method: "post",
            data: product
        })
    }

    const submittool = async (e) => {
        e.preventDefault();
        const result = await axios({
            url: `${rooturlserver}/api/admin/tools`,
            method: "post",
            data: tool
        })

    }



    return (
        <>
            <div className="admin-box">
                <h2>Admin Dashboard : </h2>
                {
                     data.length > 0 && data[0].success ? (
                        <div>
                            <h2>{data[0].data[0].name.toUpperCase()}</h2>
                            <p> email: {data[0].data[0].email}</p>
                            <br />
                            <div className="feature">
                                <button className='feat-butt' onClick={() => setClient(!client)}>client Information</button>
                                <button className='feat-butt' onClick={() => setService(!service)}>add Services</button>
                            </div>
                       </div>
                    ):(
                        <h2>{data.length >0 && data[0].err}</h2>
                    )
        }
                <br />
                <hr />
                <br />
                <div className="result-box">
                    <p style={{textAlign:"center"}}><b>{client?"Client Information":null}</b></p>
                    <p style={{textAlign:"center"}}><b>{service?"Services :":null}</b></p>
                    <br />
                    {
                       data.length >0 && data[0].success ? (null) : (
                            <>
                                <h2>Login {loading?"| loading.." :null}</h2>
                                <form>
                                    <label htmlFor="name">admin name</label>
                                    <input type="text" onChange={handleadmin} name="name" /><br />
                                    <label htmlFor="email">admin email </label>
                                    <input type="email" onChange={handleadmin} name="email" /><br />
                                    <label htmlFor="password">enter password</label>
                                    <input type="password" onChange={handleadmin} name="password" /><br />
                                    <button type="submit" onClick={submitadmin}>submit</button>
                                    <button type="reset">reset </button>
                                </form>
                            </>
                        )
                    }
                    {
                        client ? <Client /> : null
                    }
                    {
                        service ? (
                            <>
                                <h2>Add service / tools</h2>
                                <form>
                                    <label htmlFor="toolname">Tool name</label>
                                    <input type="text" onChange={handletool} name="toolname" /><br />
                                    <label htmlFor="color">Tool color</label>
                                    <input type="text" onChange={handletool} name="color" /><br />
                                    <label htmlFor="toollink">Image Link</label>
                                    <input type="text" onChange={handletool} name="toollink" /><br />
                                    <label htmlFor="abouttool">About tool</label>
                                    <input type="text" onChange={handletool} name="abouttool" /><br />
                                    <button type='submit' onClick={submittool}>submit</button>
                                    <button type='reset'>reset</button>
                                </form>
                                <br />
                                <hr />
                                <br />
                                <h2>Add service / Product</h2>
                                <form>
                                    <label htmlFor="prodimg">product image link</label>
                                    <input type="text" onChange={handleproduct} name="prodimg" /> <br />
                                    <label htmlFor="prodname">Product name</label>
                                    <input type="text" onChange={handleproduct} name="prodname" /> <br />
                                    <label htmlFor="prodabout">About Product</label>
                                    <input type="text" onChange={handleproduct} name="prodabout" /> <br />
                                    <button type='submit' onClick={submitproduct}> submit </button>
                                    <button type="reset">reset</button>
                                </form>

                            </>

                        ) : null
                    }


                </div>
            </div>

        </>
    )
}

export default Admin
