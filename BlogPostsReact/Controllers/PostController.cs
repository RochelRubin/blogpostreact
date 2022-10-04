using BlogPostsReact.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogPostsReact.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private string _connectionString;

        public PostController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [Route("getall")]
        [HttpGet]
        public List<Post> GetAll()
        {
            var repo = new BlogPostRepository(_connectionString);
            return repo.GetPosts();
        }
        [Route("addpost")]
        [HttpPost]
        public void AddPost(Post post)
        {
            var repo = new BlogPostRepository(_connectionString);
            post.DateCreated = DateTime.Now;
            repo.AddPost(post);
        }
        [Route("addcomment")]
        [HttpPost]
        public void AddComment(Comment comment)
        {
            var repo = new BlogPostRepository(_connectionString);
            comment.DateCreated = DateTime.Now;
            repo.AddComment(comment);
        }
        [Route("getpostbyid")]
        [HttpGet]
        public Post GetPostById(int id)
        {
            var repo = new BlogPostRepository(_connectionString);
            return repo.GetPostById(id);
        }
        [Route("getcommentsbyid")]
        [HttpGet]
        public List<Comment> GetCommentsById(int id)
        {
            var repo = new BlogPostRepository(_connectionString);
            return repo.GetCommentsById(id);
        }
        [Route("getpaginatedposts")]
        [HttpGet]
        public List<Post> GetPaginatedPosts(int skip, int amount)
        {
            var repo = new BlogPostRepository(_connectionString);
            return repo.GetPaginatedPosts(skip, amount);
        }
        [Route("getnewestid")]
        [HttpGet]
        public Post GetNewestId()
        {
            var repo = new BlogPostRepository(_connectionString);
            return repo.GetNewestId();
        }
    }
}
