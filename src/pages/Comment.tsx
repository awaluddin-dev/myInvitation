import { useEffect, useState } from "react";
import { getAllComments, addComment } from "../module/Api";
import single from "./../assets/singlecheck.svg";
import double from "./../assets/doubleCheck.svg";
import { toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css";
import "./Comment.css";
export default function Comment() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    nama: "",
    komentar: "",
    absen: "hadir",
  });

  useEffect(() => {
    // Fetch comments on component mount
    getAllComments()
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  const handleAddComment = async () => {
    try {
      await addComment(newComment);
      // Refresh comments after adding a new comment
      const updatedComments = await getAllComments();
      setComments(updatedComments);
      // Clear the newComment state
      setNewComment({ nama: "", komentar: "", absen: "hadir" });
      // Show success notification
      toast.success("Makasih, pesan anda sudah ditambahkan", {
        autoClose: 3000,
      });
    } catch (error) {
      // Show error notification
      toast.error("Failed to add comment. Please try again.", {
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="midlePosition">
      <h2>
        Kirimkan Pesan <br /> Untuk Kedua Mempelai
      </h2>
      <div className="komenFlex">
        <input
          type="text"
          placeholder="Nama"
          value={newComment.nama}
          onChange={(e) =>
            setNewComment({ ...newComment, nama: e.target.value })
          }
          key={"name"}
        />
        <textarea
          placeholder="Pesan"
          value={newComment.komentar}
          onChange={(e) =>
            setNewComment({ ...newComment, komentar: e.target.value })
          }
        />
        <div className="absenKom">
          <label htmlFor="absen">Konfirmasi:</label>
          <select
            name="absen"
            value={newComment.absen}
            onChange={(e) =>
              setNewComment({ ...newComment, absen: e.target.value })
            }
          >
            <option value="hadir">Hadir</option>
            <option value="tidak">Tidak</option>
          </select>
        </div>

        <div onClick={handleAddComment} className="btnPesan">
          Kirim Pesan
        </div>
      </div>
      <h2>Ucapan</h2>
      <div className="pesanPesan">
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="pesanTemans">
              <div className="namaPeserta">
                <h3>{comment.nama} </h3>
                {comment.absen == "hadir" ? (
                  <img src={double} alt="hadir" className="bisahadir" />
                ) : (
                  <img src={single} alt="tdk" className="tidakhadir" />
                )}
              </div>
              <div className="pesanTeman">{comment.komentar}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
