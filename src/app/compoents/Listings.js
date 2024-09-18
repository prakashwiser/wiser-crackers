"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ImWhatsapp } from "react-icons/im";
import Link from "next/link";
import axios from "axios";
import Swiperr from "./Swiperr";
const HomeListing = () => {
  const [allListings, setAllListings] = useState([]);
  const [listings, setListings] = useState(allListings);
  const [filter, setFilter] = useState("all");
  let replaceImage = 'https://raw.githubusercontent.com/prakashwiser/assets/main/crackers_wiser/'
  useEffect(() => {
    axios
      .get("https://66ea644a55ad32cda4789858.mockapi.io/crackers")
      .then((response) => {
        setAllListings(response.data);
        setListings(response.data);
      });
  }, []);
  const handleFilterChange = (e) => {
    const value = e.target.value;
    console.log(allListings);

    setFilter(value);
    if (value === "all") {
      setListings(allListings);

    } else if (value == "bomb") {
      const rentListings = allListings.filter(
        (listing) => listing.listingType == "bomb"
      );
      setListings(rentListings);
    } else if (value == "chakkaram") {
      const saleListings = allListings.filter(
        (listing) => listing.listingType == "chakkaram"
      );
      setListings(saleListings);
    } else if (value == "lakshmi") {
      const rentListings = allListings.filter(
        (listing) => listing.listingType == "lakshmi"
      );
      setListings(rentListings);
    } else if (value == "saram") {
      const rentListings = allListings.filter(
        (listing) => listing.listingType == "saram"
      );
      setListings(rentListings);
    } else if (value == "solapori") {
      const rentListings = allListings.filter(
        (listing) => listing.listingType == "solapori"
      );
      setListings(rentListings);
    } else if (value == "saram") {
      const rentListings = allListings.filter(
        (listing) => listing.listingType == "saram"
      );
      setListings(rentListings);
    } else if (value == "others") {
      const rentListings = allListings.filter(
        (listing) => listing.listingType == "others"
      );
      setListings(rentListings);
    }
  };

  

  console.log(allListings);
  console.log(listings);
  return (
    <>
      <Navbar />
      <div className="mb-3">
        <Swiperr />
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-md-3">
            <div>
              <p>Filter</p>
              <div className="my-2">
                <label
                  className="form-check-label d-flex gap-2"
                  style={{ fontSize: "1.2rem" }}
                >
                  <input
                    type="checkbox"
                    name="filter"
                    value="all"
                    checked={filter === "all"}
                    onChange={handleFilterChange}
                    style={{ transform: "scale(1.5)" }}
                  />{" "}
                  All
                </label>
              </div>
              <div className="my-2">
                <label
                  className="form-check-label d-flex gap-2"
                  style={{ fontSize: "1.2rem" }}
                >
                  <input
                    type="checkbox"
                    name="filter"
                    value="bomb"
                    checked={filter === "bomb"}
                    onChange={handleFilterChange}
                    style={{ transform: "scale(1.5)" }}
                  />{" "}
                  Bomb
                </label>
              </div>
              <div className="my-2">
                <label
                  className="form-check-label d-flex gap-2"
                  style={{ fontSize: "1.2rem" }}
                >
                  <input
                    type="checkbox"
                    name="filter"
                    value="chakkaram"
                    checked={filter === "chakkaram"}
                    onChange={handleFilterChange}
                    style={{ transform: "scale(1.5)" }}
                  />{" "}
                  Sangu Chakkaram
                </label>
              </div>
              <div className="my-2">
                <label
                  className="form-check-label d-flex gap-2"
                  style={{ fontSize: "1.2rem" }}
                >
                  <input
                    type="checkbox"
                    name="filter"
                    value="lakshmi"
                    checked={filter === "lakshmi"}
                    onChange={handleFilterChange}
                    style={{ transform: "scale(1.5)" }}
                  />{" "}
                  Lakshmi
                </label>
              </div>
              <div className="my-2">
                <label
                  className="form-check-label d-flex gap-2"
                  style={{ fontSize: "1.2rem" }}
                >
                  <input
                    type="checkbox"
                    name="filter"
                    value="saram"
                    checked={filter === "saram"}
                    onChange={handleFilterChange}
                    style={{ transform: "scale(1.5)" }}
                  />{" "}
                  Saram Vedi
                </label>
              </div>
              <div className="my-2">
                <label
                  className="form-check-label d-flex gap-2"
                  style={{ fontSize: "1.2rem" }}
                >
                  <input
                    type="checkbox"
                    name="filter"
                    value="solapori"
                    checked={filter === "solapori"}
                    onChange={handleFilterChange}
                    style={{ transform: "scale(1.5)" }}
                  />{" "}
                  Solap Pori
                </label>
              </div>
              <div>
                <label
                  className="form-check-label d-flex gap-2"
                  style={{ fontSize: "1.2rem" }}
                >
                  <input
                    type="checkbox"
                    name="filter"
                    value="others"
                    checked={filter === "others"}
                    onChange={handleFilterChange}
                    style={{ transform: "scale(1.5)" }}
                  />{" "}
                  Othres
                </label>
              </div>
            </div>
            
          </div>

          <div className="col-md-9">
            <div className="row">
              {listings.length !== 0 ? (
                listings.map((listing) => (
                  <div key={listing.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                      <div className="card-overlay">
                        <img
                          src={
                            "https://raw.githubusercontent.com/prakashwiser/assets/main/crackers_wiser/" +
                            listing.image
                          }
                          className="card-img-top im"
                          alt={listing.title}
                          style={{ height: "200px", objectFit: "cover" }}
                          onError={replaceImage}
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{listing.name}</h5>
                        <div className="card-title">{listing.tname}</div>
                        <div className="d-flex justify-content-between">
                          <p className="card-text">
                            Price: {listing.price} / box
                          </p>
                          <p className="card-text">
                            Pieces: {listing.piece} / box
                          </p>
                        </div>
                        <Link
                          className="decoration"
                          href={
                            "https://api.whatsapp.com/send?phone=918973759690&text=" +
                            listing.name
                          }
                          target="_blank"
                        >
                          <div className="d-flex  my-2 justify-content-center text-success align-items-center gap-2">
                            <div>Contact</div>
                            <ImWhatsapp />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center">No data available</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <section class="footer mt-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 ps-4 ps-lg-0">
              <div class="mt-4 mb-4">
                <div className="h3">Service</div>
                Online shopping can be a convenient and enjoyable experience!
                You can browse a wide range of products, compare prices easily,
                and often find great deals. Do you have specific questions or
                need tips contact on Admin...
              </div>
            </div>
            <div class="col-lg-7">
              <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-4 mt-4 ps-4 ps-lg-0 ">
                  <div class="h3">company</div>
                  <div>wiser</div>
                  <div>contact</div>
                  <div>blog</div>
                  <div>careers</div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4 mt-4 ps-4 ps-lg-0">
                  <div class="h3">support</div>
                  <div>help and support</div>
                  <div>instructor</div>
                  <div>tutorial</div>
                  <div>user friendly</div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg- mt-4 ps-4 ps-lg-0">
                  <div class="h3">get in touch</div>
                  <div>622 304</div>
                  <div>Email: prakashvadakadu8@gamil.com</div>
                  <div>Phone: 7339628276</div>
                </div>
              </div>
            </div>
          </div>
          <div class="underline m-5"></div>
          <div>© 2023 Wiser-UI, Inc. All Rights Reserved</div>
        </div>
      </section>
      <style jsx>{`
        .card:hover {
          border-radius: 8px;
          transition: box-shadow 0.7s;
          width: 101%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          // scale: 1.1;
        }
      `}</style>
    </>
  );
};

export default HomeListing;
