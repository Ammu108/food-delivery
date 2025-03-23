import React, { useContext, useRef, useState } from 'react'
import "./AddItem.css";
import { images } from '../../assets/assets';
import axios from "axios";
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';

const AddItem = () => {

    const fileInputRef = useRef(null);
    const { backendUrl } = useContext(AdminContext);
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);

    const handleImageClick = () => {
        fileInputRef.current.click(); // Trigger file input on image click
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", Number(price));
        formData.append("category", category);

        if (image) {
            formData.append("image", image); // Attach image if selected
        }

        setLoading(true);

        try {
            const response = await axios.post(`${backendUrl}/api/food/add-item`, formData);
            toast.success(response.data.message);
            setName("");
            setDescription("");
            setPrice("");
            setCategory("");
            setImage(null);
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className='admin-additem-container'>
                <div className='admin-additem-inside-container'>
                    <form onSubmit={onSubmitHandler} className="row g-3 adding-doctor-form">
                        <div className='additem-img-div-box mt-4'>
                            <div className='upload-img-div'>
                                <img src={image ? URL.createObjectURL(image) : images.user} onClick={handleImageClick} alt='user-img' className='doctor-img' style={{ cursor: "pointer" }} />
                                <input type="file" ref={fileInputRef} onChange={(e) => setImage(e.target.files[0])} className="form-control" id="doctorImage" required hidden />
                            </div>
                            <div className='upload-img-placeholder'>
                                <p>Upload Food <br /> Picture</p>
                            </div>
                        </div>

                        <div className="col-md-6 mt-4">
                            <label htmlFor="inputName" className="form-label">Food Name</label>
                            <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} className="form-control" id="inputName" placeholder='Full Name' required />
                        </div>
                        <div className="col-md-6 mt-4">
                            <label htmlFor="category" className="form-label">Food Category</label>
                            <select id="category" onChange={(e) => setCategory(e.target.value)} value={category} name="category" className="form-control" required>
                                <option value="Pizza">Pizza</option>
                                <option value="PanCakes">PanCakes</option>
                                <option value="Cake">Cake</option>
                                <option value="Salmon">Salmon</option>
                                <option value="Burger">Burger</option>
                                <option value="Chicken Biryani">Chicken Biryani</option>
                                <option value="Fish">Fish</option>
                                <option value="Pasta">Pasta</option>
                                <option value="Noodles">Noodles</option>
                                <option value="Rolls">Rolls</option>
                                <option value="Sandwich">Sandwich</option>
                                <option value="Paneer">Paneer</option>
                                <option value="French Fries">French Fries</option>
                                <option value="Momos">Momos</option>
                                <option value="Mutton">Mutton</option>
                            </select>
                        </div>
                        <div className="col-md-6 mt-5">
                            <label htmlFor="inputEmail" className="form-label">Food Price</label>
                            <input type="number" name='price' onChange={(e) => setPrice(e.target.value)} value={price} className="form-control" id="inputPrice" required />
                        </div>
                        <div className="mb-3 mt-5">
                            <label htmlFor="aboutDoctor" className="form-label">Food Description</label>
                            <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} value={description} name='description' id="aboutFood" rows="3" placeholder="write about Food..."></textarea>
                        </div>
                        <div className="col-12 btn mb-4">
                            <button type='submit' className='add-btn' disabled={loading}>{loading ? "Adding Item..." : "Add Food Item"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddItem
