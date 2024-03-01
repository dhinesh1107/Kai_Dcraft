import { React, useEffect, useState } from "react";
import CustomInput from "../../Components/CustomInput/CustomInput";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import Dropzone from "react-dropzone";
import { createProduct, uploadImg } from "../../Store/Admin/adminAction";
//import { delImg, uploadImg } from "../features/upload/uploadSlice";
//import { createProducts, resetState } from "../features/product/productSlice";
let schema = yup.object().shape({
  name: yup.string().required("Title is Required"),
  description: yup.string().required("Description is Required"),
  price: yup.number().required("Price is Required"),
  cat: yup.string().required("type is Required"),
});

const Addproduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
 
  //const imgState = useSelector((state) => state.upload.images);
 // const newProduct = useSelector((state) => state.product);
  //const { isSuccess, isError, isLoading, createdProduct } = newProduct;
//   useEffect(() => {
//     if (isSuccess && createdProduct) {
//       toast.success("Product Added Successfullly!");
//     }
//     if (isError) {
//       toast.error("Something Went Wrong!");
//     }
//   }, [isSuccess, isError, isLoading]);

  const img = [];
//   imgState.forEach((i) => {
//     img.push({
//       public_id: i.public_id,
//       url: i.url,
//     });
//   });

//   useEffect(() => {
//     formik.values.color = color ? color : " ";
//     formik.values.images = img;
//   }, [color, img]);
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      cat: "",
      img_path: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createProduct(values));
      formik.resetForm();
      console.log("into submit")
      //setColor(null);
    //   setTimeout(() => {
    //     dispatch(resetState());
    //   }, 3000);
    },
  });
//   const handleColors = (e) => {
//     setColor(e);
//     console.log(color);
//   };
console.log(formik);
  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <CustomInput
            type="text"
            label="Enter Product Title"
            name="name"
            onChng={formik.handleChange("name")}
            onBlr={formik.handleBlur("name")}
            val={formik.values.name}
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <div className="">
            <ReactQuill
              theme="snow"
              name="description"
              onChange={formik.handleChange("description")}
              value={formik.values.description}
            />
          </div>
          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>
          <CustomInput
            type="number"
            label="Enter Product Price"
            name="price"
            onChng={formik.handleChange("price")}
            onBlr={formik.handleBlur("price")}
            val={formik.values.price}
          />
          <div className="error">
            {formik.touched.price && formik.errors.price}
          </div>
          <select
            name="cat"
            onChange={formik.handleChange("cat")}
            onBlur={formik.handleBlur("cat")}
            value={formik.values.cat}
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="Select Type">Select Type</option>
            <option value= "DC">Dreamcatcher</option>
            <option value= "CH">CarHangs</option>
          </select>
          <div className="error">
            {formik.touched.cat && formik.errors.cat}
          </div>
          <div className="bg-white border-1 p-5 text-center">
            <Dropzone
              onDrop={(acceptedFiles) => {uploadImg(acceptedFiles); console.log(acceptedFiles)}}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="showimages d-flex flex-wrap gap-3">
            {/* {imgState?.map((i, j) => {
              return (
                <div className=" position-relative" key={j}>
                  <button
                    type="button"
                    //onClick={() => dispatch(delImg(i.public_id))}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img src={i.url} alt="" width={200} height={200} />
                </div>
              );
            })} */}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
