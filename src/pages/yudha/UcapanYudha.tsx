import styles from "./../../css/module/Yudha.module.css";
import { toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css";
import "./../ardi/KomentarArdi.css";
import { getArdiAllComments, addArdiComment } from "../../module/Api";
import { useState, useEffect } from "react";
export default function UcapanYudha() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    nama: "",
    komentar: "",
    absen: "hadir",
  });

  useEffect(() => {
    // Fetch comments on component mount
    getArdiAllComments()
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  const handleAddComment = async () => {
    try {
      await addArdiComment(newComment);
      // Refresh comments after adding a new comment
      const updatedComments = await getArdiAllComments();
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
    <section className={styles.mempelaiSection}>
      <div className={styles.mempelaiImage}>
        <div className={styles.introOverlayW} style={{ gap: "0px" }}>
          <div className={styles.tagIntro}>
            <h2 className={styles.initialNameEvent}>Ucapkan Sesuatu</h2>
          </div>
          <h2 className="ardiTitle2" style={{ marginTop: "1rem" }}>
            Berikan Ucapan & Doa Restu
          </h2>
          <div className="commentsArdi">
            <div className="formArdi">
              <input
                type="text"
                placeholder="nama"
                value={newComment.nama}
                onChange={(e) =>
                  setNewComment({ ...newComment, nama: e.target.value })
                }
                key={"name"}
              />
              <textarea
                placeholder="ucapan"
                value={newComment.komentar}
                onChange={(e) =>
                  setNewComment({ ...newComment, komentar: e.target.value })
                }
              />
              <select
                name="absen"
                value={newComment.absen}
                onChange={(e) =>
                  setNewComment({ ...newComment, absen: e.target.value })
                }
              >
                <option value disabled selected>
                  Konfirmasi Kehadiran
                </option>
                <option value="hadir">Hadir</option>
                <option value="tidak">Tidak Hadir</option>
              </select>
              <div
                className="btnSaveDate"
                style={{ margin: "1rem auto" }}
                onClick={handleAddComment}
              >
                Kirim
              </div>
            </div>
            <div className="listCommentArdi">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div className="cardCommenttemanArdi" key={comment.id}>
                    <div className="badge">
                      <h6>{comment.nama}</h6>
                      {comment.absen == "hadir" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fillRule="evenodd"
                          strokeLinejoin="round"
                          strokeMiterlimit="2"
                          clipRule="evenodd"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="#3d9a62"
                            d="M17.645 8.032c-.294-.307-.599-.625-.714-.903-.106-.256-.112-.679-.118-1.089-.012-.762-.025-1.626-.626-2.227s-1.465-.614-2.227-.626c-.41-.006-.833-.012-1.089-.118-.278-.115-.596-.42-.903-.714-.54-.518-1.152-1.105-1.968-1.105-.816 0-1.428.587-1.968 1.105-.307.294-.625.599-.903.714-.256.106-.679.112-1.089.118-.762.012-1.626.025-2.227.626s-.614 1.465-.626 2.227c-.006.41-.012.833-.118 1.089-.115.278-.42.596-.714.903C1.837 8.572 1.25 9.184 1.25 10c0 .816.587 1.428 1.105 1.968.294.307.599.625.714.903.106.256.112.679.118 1.089.012.762.025 1.626.626 2.227s1.465.614 2.227.626c.41.006.833.012 1.089.118.278.115.596.42.903.714.54.518 1.152 1.105 1.968 1.105.816 0 1.428-.587 1.968-1.105.307-.294.625-.599.903-.714.256-.106.679-.112 1.089-.118.762-.012 1.626-.025 2.227-.626s.614-1.465.626-2.227c.006-.41.012-.833.118-1.089.115-.278.42-.596.714-.903.518-.54 1.105-1.152 1.105-1.968 0-.816-.587-1.428-1.105-1.968Zm-3.343-2.461a.882.882 0 0 0-1.222.256l-4.26 6.509-2.036-1.885a.885.885 0 0 0-1.2 1.297l2.815 2.604c.01.009.023.011.033.02.025.02.04.048.067.067.037.025.08.03.121.048a.86.86 0 0 0 .145.058.817.817 0 0 0 .147.023.883.883 0 0 0 .212-.003.89.89 0 0 0 .086-.02.887.887 0 0 0 .247-.103l.039-.028c.052-.036.108-.062.152-.11.031-.034.045-.078.071-.116l.003-.004 4.835-7.389a.89.89 0 0 0-.255-1.224Z"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fillRule="evenodd"
                          strokeLinejoin="round"
                          strokeMiterlimit="2"
                          clipRule="evenodd"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="#d90a11"
                            d="M17.645 8.032c-.294-.307-.599-.625-.714-.903-.106-.256-.112-.679-.118-1.089-.012-.762-.025-1.626-.626-2.227s-1.465-.614-2.227-.626c-.41-.006-.833-.012-1.089-.118-.278-.115-.596-.42-.903-.714-.54-.518-1.152-1.105-1.968-1.105-.816 0-1.428.587-1.968 1.105-.307.294-.625.599-.903.714-.256.106-.679.112-1.089.118-.762.012-1.626.025-2.227.626s-.614 1.465-.626 2.227c-.006.41-.012.833-.118 1.089-.115.278-.42.596-.714.903C1.837 8.572 1.25 9.184 1.25 10c0 .816.587 1.428 1.105 1.968.294.307.599.625.714.903.106.256.112.679.118 1.089.012.762.025 1.626.626 2.227s1.465.614 2.227.626c.41.006.833.012 1.089.118.278.115.596.42.903.714.54.518 1.152 1.105 1.968 1.105.816 0 1.428-.587 1.968-1.105.307-.294.625-.599.903-.714.256-.106.679-.112 1.089-.118.762-.012 1.626-.025 2.227-.626s.614-1.465.626-2.227c.006-.41.012-.833.118-1.089.115-.278.42-.596.714-.903.518-.54 1.105-1.152 1.105-1.968 0-.816-.587-1.428-1.105-1.968Zm-3.94-1.737a1 1 0 0 0-1.418 0L10 8.592 7.713 6.295a1.002 1.002 0 0 0-1.418 1.418L8.592 10l-2.297 2.287a.998.998 0 0 0 0 1.418 1 1 0 0 0 1.418 0L10 11.408l2.287 2.297a.998.998 0 0 0 1.418 0 1 1 0 0 0 0-1.418L11.408 10l2.297-2.287a.998.998 0 0 0 0-1.418Z"
                          ></path>
                        </svg>
                      )}
                    </div>
                    <p>{comment.komentar}</p>
                  </div>
                ))
              ) : (
                <p>Belum Ada Ucapan</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
