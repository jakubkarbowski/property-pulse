"use client";
import React from "react";
import { ClipLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "100px auto",
};

const LoadingPage = ({ loading }) => {
    return (
        <div>
            <ClipLoader
                color="#3ba2f6"
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
            />
            LoadingPage
        </div>
    );
};

export default LoadingPage;
