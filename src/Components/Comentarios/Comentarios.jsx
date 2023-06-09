import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Comentarios.css';
import { faTrash, faEdit, faCheck, faPaperPlane, faTimes, faComment, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
export default function Comentarios() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    const [visibleComments, setVisibleComments] = useState(2);
    const [commentsPerPage, setCommentsPerPage] = useState(2);
    const [showAllComments, setShowAllComments] = useState(false);

    useEffect(() => {
        fetchComments();
    }, []);



    const createComment = async () => {
        try {
            const response = await axios.post(
                'https://fitness-ue8o.onrender.com/comments',
                { text: newComment },
                { headers: headers }
            );
            setNewComment('');
            fetchComments();
            console.log('Comment creado:', response.data);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Comment creado',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: error.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
    const [editComentario, setEditComentario] = useState(null);
    const [editComentarioText, setEditComentarioText] = useState('');
    const [editingComment, setEditingComment] = useState(false);
    const [editedCommentText, setEditedCommentText] = useState('');
    const [comentarioText, setComentarioText] = useState('');
    const [comentarios, setComentarios] = useState([]);

    const handleComentarioTextChange = (event) => {
        setComentarioText(event.target.value);
    };

    const actualizarComentarios = (nuevoComentario) => {
        // Asigna los datos del usuario al comentario
        nuevoComentario.user_id = {
            name: 'Nombre del usuario',
            photo: 'URL de la foto del usuario'
        };

        setComentarios([...comentarios, nuevoComentario]);
        fetchComments(); // Actualiza la lista de comentarios nuevamente
    };
    const handleEditarComentario = (comentario) => {
        setEditComentario(comentario);
        setEditComentarioText(comentario.text);
    };
    const cancelarEdicionComentario = () => {
        setEditingComment(false);
        setEditComentario(null);
        setEditComentarioText('');
    };

    const handleEditComentarioTextChange = (event) => {
        setEditComentarioText(event.target.value);
    };
    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const limit = showAllComments ? null : 4; // Obtener todos los comentarios si showAllComments es true
            const response = await axios.get(
                `https://fitness-ue8o.onrender.com/comments?limit=${limit}`,
                { headers: headers }
            );
            setComments(response.data.comments);
            console.log(response.data.comments);
        } catch (error) {
            console.error(error);
        }
    };


    const loadMoreComments = () => {
        setVisibleComments(visibleComments + commentsPerPage);
    };

    const handleEditarComentarioSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(
                `https://fitness-ue8o.onrender.com/comments/${editComentario._id}`,
                { text: editComentarioText },
                { headers: headers }
            );

            const updatedComentarios = comentarios.map((comentario) => {
                if (comentario._id === editComentario._id) {
                    return {
                        ...comentario,
                        text: editComentarioText
                    };
                }
                return comentario;
            });

            setComentarios(updatedComentarios);
            setEditingComment(false);
            setEditComentario(null);
            setEditComentarioText('');

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Comment editado',
                showConfirmButton: false,
                timer: 1500
            });

            fetchComments(); // Actualiza la lista de comentarios nuevamente
        } catch (error) {
            console.error(error);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Comment no editado',
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const handleEliminarComentario = async (comentarioId) => {
        try {
            const response = await axios.delete(
                `https://fitness-ue8o.onrender.com/comments/${comentarioId}`,
                { headers: headers }
            );

            const updatedComentarios = comentarios.filter(comentario => comentario._id !== comentarioId);
            setComentarios(updatedComentarios);

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Comment eliminado',
                showConfirmButton: false,
                timer: 1500
            });

            fetchComments(); // Actualiza la lista de comentarios nuevamente
        } catch (error) {
            console.error('Error al eliminar el comentario:', error);
            Swal.fire({
                title: '¡Error!',
                text: 'Ha ocurrido un error al eliminar el comentario',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    };



    const [userData, setUserData] = useState(null);

    useEffect(() => {

        updateUserData();
    }, []);

    const updateUserData = () => {
        const user = localStorage.getItem('user');
        if (user) {
            setUserData(JSON.parse(user));
        }
    };
    return (
        <div className="comentariosContain">
            <div className='comentarios-title-cantidad'>
                <h3>Comentarios</h3>
                <p>{comments.length}</p>

            </div>
            <div>
                {comments.slice(0, showAllComments ? comments.length : 4).map((comment) => (
                    <div>
                        <div key={comment.id} className='comentario'>
                            <div className='photo-name-create'>
                                <div className='comment-info'>
                                    <img src={comment.user_id.photo} alt="" />
                                    <div>
                                        <p>{comment.user_id.name}</p>
                                        <h6>{new Date(comment.createdAt).toLocaleString()}</h6>
                                    </div>
                                </div>



                                <div>
                                    {comment.user_id?._id === userData?.user_id && (
                                        <div>
                                            {editComentario && editComentario._id === comment._id ? (
                                                <div>
                                                    <form onSubmit={handleEditarComentarioSubmit} className='form-edit-comment'>
                                                        <input
                                                            className='input-edit-comment'
                                                            type="text"
                                                            required
                                                            value={editComentarioText}
                                                            onChange={handleEditComentarioTextChange}
                                                        />

                                                        <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
                                                        <button onClick={cancelarEdicionComentario}><FontAwesomeIcon icon={faTimes} /></button>

                                                    </form>
                                                </div>
                                            ) : (
                                                <div className='edit-delete-btns'>
                                                    <button className='edit-btn' onClick={() => handleEditarComentario(comment)}><FontAwesomeIcon icon={faEdit} /> </button>
                                                    <button className='delete-btn' onClick={() => handleEliminarComentario(comment._id)}><FontAwesomeIcon icon={faTrash} /></button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className='comment-text'>
                                <p>{comment.text}</p>
                            </div>
                        </div>

                    </div>
                ))}
                {!showAllComments && comments.length > 4 && (
                    <button className="mas-comentarios" onClick={() => setShowAllComments(true)}>
                        Cargar más.. <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                )}
            </div>

            {userData ? (
                <div className='crear-comentario-form'>
                    <img src={userData.photo} alt="" />
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button className='crear-btn' onClick={createComment}><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            ) : (
                <div className='enlaces2' >
                    <Anchor to={`/register`} >  <span className='a'> Ingresar para comentar</span></Anchor>
                </div>
            )}

        </div>
    );
}  