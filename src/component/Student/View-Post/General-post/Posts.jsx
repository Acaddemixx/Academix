import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../Features/auth/authSlice";
import {
  Card,
  CardHeader,
  Typography,
  IconButton,
  Textarea,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import {
  HeartIcon,
  ArrowDownCircleIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import ChatBubbleOvalLeftEllipsisIcon from "@heroicons/react/24/outline/ChatBubbleOvalLeftEllipsisIcon";
import ExclamationCircleIcon from "@heroicons/react/24/outline/ExclamationCircleIcon";
import Postdetail from "./Postdetail";
import Reportpopup from "./Reportpopup";
function Posts() {
  const Token = useSelector(selectCurrentToken);

  const [posts, setPosts] = useState([]);
  const [openPostId, setOpenPostId] = useState(null);
  const [commentInput, setCommentInput] = useState("");
  const [liked, setLiked] = useState(false);
  // const [likcont, setLikcont] = React.useState(0);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "http://54.237.124.13:8000/postapi/general/posts",
        {
          headers: {
            Authorization: `Token ${Token}`,
          },
        }
      );
      const data = await response.json();
      console.log("Fetched posts data:", data.posts); // Log posts array
      setPosts(data.posts); // Set posts array to state
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const handleOpenPost = (postId) => {
    setOpenPostId(postId);
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);
  // const [isFavorite, setIsFavorite] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  // const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  // const handleIsFavorite = (id) => {
  //   let like = 0;const handleReport = () => Setreport(!report);
  //   like = 1 - like;
  //   if (like == 1) {
  //     const url = `http://54.237.124.13:8000/postapi/posts/${id}/likes`;
  //     try {
  //       const response = fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Token ${Token}`, // Assuming Token is accessible here
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error("Failed to update like status");
  //       }

  //       // // Update likes count based on the new like status
  //       // setLikesCount(newLikeStatus === 1 ? likesCount + 1 : likesCount - 1);
  //       // setLiked(newLikeStatus === 1);
  //     } catch (error) {
  //       console.error("Error updating like status:", error);
  //       // Handle error, e.g., show a toast message
  //     }
  //   } else {
  //   const url = `http://54.237.124.13:8000/postapi/posts/${id}/unlikes`;
  //     /  //     try {
  //       const response = fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Token ${Token}`, // Assuming Token is accessible here
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error("Failed to update like status");
  //       }

  //       // // Update likes count based on the new like status
  //       // setLikesCount(newLikeStatus === 1 ? likesCount + 1 : likesCount - 1);
  //       // setLiked(newLikeStatus === 1);
  //     } catch (error) {
  //       console.error("Error updating like status:", error);
  //       // Handle error, e.g., show a toast message
  //     }
  //   }
  // };
  let like = 0;

  const handleIsFavorite = async (id) => {
    try {
      let url = `http://54.237.124.13:8000/postapi/posts/${id}/likes`;
      let response;
      if (like === 0) {
        like = 1;
        response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Token}`,
          },
        });
      } else {
        like = 0;
        url = `http://54.237.124.13:8000/postapi/posts/${id}/unlike`;
        response = await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Token}`,
          },
        });
      }

      if (!response.ok) {
        throw new Error("Failed to update like status");
      }

      // If needed, update state or perform any other actions upon successful like/unlike
    } catch (error) {
      console.error("Error updating like status:", error);
      // Handle error, e.g., show a toast message
    }
  };

  const [report, Setreport] = React.useState(false);

  const handleReport = (postId) => Setreport(!report);
  const handleCommentSubmit = async () => {
    try {
      const response = await fetch(
        `http://54.237.124.13:8000/postapi/posts/${postId}/comments`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Token}`,
          },
          body: JSON.stringify({ content: commentInput }),
        }
      );
      if (response.ok) {
        // Optionally, you can update the UI to reflect the new comment
        // Fetch the post details again to get the updated comment count
        alert("Comment added successfully");
        // const response = await fetch(
        //   `http://54.237.124.13:8000/postapi/posts/1/comments`,
        //   {
        //     headers: {
        //       Authorization: `Token ${Token}`,
        //     },
        //   }
        // );
        // const postData = await response.json();
        // setPost(postData); // Set fetched post data to state

        setCommentInput(""); // Clear the comment input after submission
      } else {
        // Handle error response if needed
      }
    } catch (error) {
      // Handle fetch error
      alert("Failed to add comment");
      console.error("Error adding comment:", error);
    }
  };

  // [  ****************************************]
  // const handleLikeToggle = async (postId, liked) => {
  //   try {
  //     const url = `http://54.237.124.13:8000/postapi/posts/${postId}/likes`;
  //     let method;
  //     let alertMessage;

  //     if (liked) {
  //       method = "DELETE"; // Unlike if already liked
  //       alertMessage = "Unliked successfully";
  //     } else {
  //       method = "POST"; // Like if not liked
  //       alertMessage = "Liked successfully";
  //     }

  //     const response = await fetch(url, {
  //       method,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Token ${Token}`,
  //       },
  //     });

  //     if (response.ok) {
  //       alert(alertMessage);
  //       // Update the UI state or any other logic as needed
  //     } else {
  //       // Handle non-successful responses if needed
  //       alert("Failed to perform action");
  //     }
  //   } catch (error) {
  //     console.error("Error updating like status:", error);
  //     alert("Failed to perform action........");
  //   }
  // };

  // [  ****************************************]
  // const handleLikeToggle = async (postId, liked) => {
  //   try {
  //     const baseLikeUrl = `http://54.237.124.13:8000/postapi/posts/${postId}/likes`;
  //     // const baseUnlikeUrl = `http://54.237.124.13:8000/postapi/posts/${postId}/unlikes`;
  //     const url = liked ? baseUnlikeUrl : baseLikeUrl;
  //     const method = liked ? "POST" : "DELETE"; // Use POST for like and DELETE for unlike

  //     const response = await fetch(url, {
  //       method,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Token ${Token}`,
  //       },
  //     });

  //     if (response.ok) {
  //       alert(liked ? "Unliked successfully" : "Liked successfully");
  //       // Update the UI state or any other logic as needed
  //     } else {
  //       // Handle non-successful responses if needed
  //       alert("Failed to perform  the action");
  //     }
  //   } catch (error) {
  //     console.error("Error updating like status:", error);
  //     alert("Failed to perform action");
  //   }
  // };

  // {  ****************************************   }

  const handleLies = async (postId) => {
    try {
      const url = `http://54.237.124.13:8000/postapi/posts/${postId}/likes`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${Token}`,
        },
      });
      setLiked(true);
      if (response.ok) {
        setLiked(true); // Set liked to true after successful like
        // setLikcont(likcont + 1);
        // setLiked(true);
      }
    } catch (error) {
      console.error("Error updating like status:", error);
      alert("Failed to like");
    }
  };
  const handleDLies = async (postId) => {
    try {
      const url = `http://54.237.124.13:8000/postapi/posts/${postId}/likes`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${Token}`,
        },
      });
      setLiked(true);
      if (response.ok) {
        setLiked(true); // Set liked to true after successful like
        // setLikcont(likcont - 1);
        // setLiked(true);
      }
    } catch (error) {
      console.error("Error updating like status:", error);
      alert("Failed to like");
    }
  };
  // {  ****************************************   }

  // Initial state can be modified as needed

  // const handleLike = async (postId) => {
  //   try {
  //     const url = `http://54.237.124.13:8000/postapi/posts/${postId}/likes`;
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Token ${Token}`, // Make sure Token is defined
  //       },
  //     });

  //     if (response.ok) {
  //       alert("Liked successfully......");
  //       setLiked(true); // Set liked to true after successful like
  //       setLikcont(likcont + 1); // Increment like count
  //     } else {
  //       alert("Failed to like");
  //     }
  //   } catch (error) {
  //     console.error("Error updating like status:", error);
  //     alert("Failed to like");
  //   }
  //   likcont = 1;
  // };

  return (
    <>
      <Reportpopup report={report} handleReport={handleReport} />
      <Postdetail
        open={open}
        handleOpenPost={handleOpen}
        // isFavorite={isFavorite}
        handleIsFavorite={handleIsFavorite}
        postId={openPostId}
      />
      {Object.values(posts).map((post) => (
        <div className="grid grid-cols justify-center items-center h-auto max-h-full mt-2 mb-2">
          <Card key={post.id} className="w-full max-w-[35rem] mb-5">
            <div floated={false} color="" className="bg-white ">
              <div className="flex items-center gap-2 mt-3 ml-2 mb-2">
                <IconButton className="rounded-full">
                  <UserIcon className="h-6 w-6 text-white" />
                </IconButton>
                <div>
                  <Typography variant="h6">Abebe Kebede</Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {post.created_at}
                  </Typography>
                </div>
              </div>
            </div>
            <img
              src={`http://54.237.124.13:8000${post.file}`}
              alt={post.content}
              className="object-cover object-center w-full rounded-lg h-96"
            />
            <div class="block mt-1 font-sans text-sm antialiased font-normal leading-normal text-center text-inherit">
              <div className="flex float-right mt-5">
                <IconButton
                  size="sm"
                  color=""
                  variant="text"
                  className="rounded-full"
                >
                  <ArrowDownCircleIcon class="h-6 w-6 float-right" />
                </IconButton>
              </div>
              <div className="flex mt-5">
                <IconButton size="sm" color="" variant="text" className="">
                  {/* <HeartIcon
     className={`h-6 w-6 float-left ${liked ? "text-red-800" : ""}`}
     onClick={() => handleLikeToggle(post.id, liked)}
     /> */}
                  <ArrowUpIcon
                    className={`h-6 w-6 `}
                    onClick={() => handleLies(post.id)}
                  />
                </IconButton>
                <IconButton size="sm" color="" variant="text" className="">
                  <ArrowDownIcon
                    className={`h-6 w-6 fill-blue-gray-500 `}
                    onClick={() => handleDLies(post.id)}
                  />
                </IconButton>
                <IconButton
                  size="sm"
                  color=""
                  variant="text"
                  onClick={() => handleOpenPost(post.id)}
                  className="rounded-full"
                >
                  <ChatBubbleOvalLeftEllipsisIcon class="h-6 w-6 float-left" />
                </IconButton>
                <IconButton
                  size="sm"
                  color=""
                  variant="text"
                  className="rounded-full"
                  onClick={handleReport}
                >
                  <ExclamationCircleIcon class="h-6 w-6 float-left" />
                </IconButton>
              </div>
              <div class="ml-2 block mt-0 font-sans text-sm antialiased font-bold leading-normal text-left">
                <div class="ml-2 block mt-0 font-sans text-sm antialiased font-bold leading-normal text-left">
                  {/* {post.likes + likcont} Likes */}
                  {post.likes} Likes
                </div>
              </div>
              <div class="ml-2 block mt-0 font-sans text-sm antialiased font-bold leading-normal text-left">
                {post.content}
              </div>
            </div>
            <div className="flex w-full flex-row items-center gap-2 border border-gray-900/10 bg-gray-900/5 p-2 mt-1 ">
              <div className="flex">
                <IconButton variant="text" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                    />
                  </svg>
                </IconButton>
              </div>
              <Textarea
                rows={1}
                resize={true}
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder=" Comment"
                className="min-h-full !border-0 focus:border-transparent"
                containerProps={{
                  className: "grid h-full",
                }}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleCommentSubmit();
                  }
                }}
              />
              <div>
                <IconButton variant="text" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </IconButton>
              </div>
            </div>
          </Card>
        </div>
      ))}
      {openPostId === posts.id && <PostDetail post={posts} />}
    </>
  );
}
export default Posts;
