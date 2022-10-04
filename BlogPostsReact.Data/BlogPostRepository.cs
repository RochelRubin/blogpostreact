using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BlogPostsReact.Data
{
    public class BlogPostRepository
    {
        private readonly string _connectionString;
        public BlogPostRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Post> GetPosts()
        {
            using var context = new BlogPostDataContext(_connectionString);
            return context.Posts.Include(p => p.Comments).OrderByDescending(p=>p.DateCreated).ToList();
        }
        public void AddPost(Post post)
        {
            using var context = new BlogPostDataContext(_connectionString);
            
            context.Posts.Add(post);
            context.SaveChanges();
        }
        public void AddComment(Comment comment)
        {
            using var context = new BlogPostDataContext(_connectionString);
           
            context.Comments.Add(comment);
            context.SaveChanges();
        }
        public Post GetPostById(int id)
        {
            using var context = new BlogPostDataContext(_connectionString);
            return context.Posts.Include(c => c.Comments).FirstOrDefault(p => p.Id == id);
        }
        public List<Comment> GetCommentsById(int id)
        {
            using var context = new BlogPostDataContext(_connectionString);
            return context.Comments.Where(p => p.PostId == id).ToList();
        }
        public List<Post> GetPaginatedPosts(int skip, int ammount)
        {
            using var context = new BlogPostDataContext(_connectionString);
            return context.Posts.Include(p => p.Comments).Skip(skip).Take(ammount).ToList();
        }
        public Post GetNewestId()
        {
            using var context = new BlogPostDataContext(_connectionString);
            return context.Posts.OrderByDescending(p => p.DateCreated).ToList().First();
        }

    }
}
