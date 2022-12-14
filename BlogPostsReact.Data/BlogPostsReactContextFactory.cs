using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace BlogPostsReact.Data
{
    public class BlogPostsReactContextFactory : IDesignTimeDbContextFactory<BlogPostDataContext>
    {
        public BlogPostDataContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}BlogPostsReact"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new BlogPostDataContext(config.GetConnectionString("ConStr"));
        }

    }
}
