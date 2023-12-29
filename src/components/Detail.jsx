import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import fetchPoduct from "./fetchProduct";
import { useState } from "react";
import MyModal from "./MyModal";
import { Box } from "@mui/material";
import { Audio } from "react-loader-spinner";
import Header from "./Header";
import Header2 from "./Header2";
import Footer from "./Footer";

export default function Detail() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const results = useQuery(["details", id], fetchPoduct);

  if (results.isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "600px",
        }}
      >
        <Audio
          height="80"
          width="80"
          radius="9"
          color="blue"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </Box>
    );
  }
  const pet = results.data.pets[0];
  return (
    <>
      <Header />
      <Header2 />
      <div className="details">
        <div>
          <h1>{pet.name}</h1>
          <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          {showModal ? <MyModal /> : null}
        </div>
      </div>
      <Footer />
    </>
  );
}
