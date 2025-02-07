import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const Admin = () => {
    const [celebrities, setCelebrities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    useEffect(() => {
        const fetchCelebrities = async () => {
            try {

                const response = await axios.get("https://cynema-backend.onrender.com/api/celebrities"); // Update the URL as needed

                console.log(response);
                setCelebrities(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching celebrities:", error);
                setError("Failed to load data.");
                setLoading(false);
            }
        };

        fetchCelebrities();
    }, []);

    const handleDelete = async (id) => {
        try {

            await axios.delete(`https://cynema-backend.onrender.com/eventdelete/${id}`); // Update the URL as needed

            setCelebrities(celebrities.filter((celebrity) => celebrity._id !== id));
        } catch (error) {
            console.error("Error deleting celebrity:", error);
            setError("Failed to delete celebrity.");
        }
    };

    const handleView = (id) => {
        console.log("View celebrity with id:", id);
    };

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = celebrities.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(celebrities.length / rowsPerPage);

    const handlePreviousPage = () => {
        setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages);
    };

    return (
        <div className="adminpage">
            <ContentWrapper>
                {loading && <div>Loading...</div>}
                {error && <div className="error">{error}</div>}
                {!loading && !error && (
                    <>
                        <div className="table-responsive">
                            <table className="celebritiesTable">
                                <thead>
                                    <tr>
                                        <th>Serial No</th>
                                        <th>Celebratie Image</th>
                                        <th>ID</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Enquery details</th>
                                        <th>mobile</th>
                                        <th>venue city</th>
                                        <th>budject</th>
                                        <th>attendees</th>
                                        <th>Event date</th>
                                        <th>Event type</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRows.map((celebrity, index) => (
                                        <tr key={celebrity._id}>
                                            <td>{indexOfFirstRow + index + 1}</td>
                                            <td>
                                                <img src={`https://res.cloudinary.com/dlkcxiz0l/image/upload/v1720598869/linzz/${celebrity.backdrop_path}`} alt={celebrity.fullName} className="rounded-image" />
                                            </td>
                                            <td>{celebrity._id}</td>
                                            <td>{celebrity.fullName}</td>
                                            <td>{celebrity.email}</td>
                                            <td>{celebrity.moreInfo}</td>
                                            <td>{celebrity.mobileNumber}</td>
                                            <td>{celebrity.venueCity}</td>
                                            <td>{celebrity.budget}</td>
                                            <td>{celebrity.attendees}</td>
                                            <td>{celebrity.eventDate}</td>
                                            <td>{celebrity.eventType}</td>
                                            <td>
                                                <button className="view-button" onClick={() => handleView(celebrity._id)}>View</button>
                                                <button className="delete-button" onClick={() => handleDelete(celebrity._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="pagination">
                            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                                Previous
                            </button>
                            <span>Page {currentPage} of {totalPages}</span>
                            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                                Next
                            </button>
                        </div>
                    </>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Admin;
