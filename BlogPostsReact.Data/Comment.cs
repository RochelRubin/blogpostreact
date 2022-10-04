using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace BlogPostsReact.Data
{
    public class Comment
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Content { get; set; }
        public int PostId { get; set; }
       
        public DateTime DateCreated { get; set; }
        [JsonIgnore]
        public Post Post { get; set; }
    }
}
