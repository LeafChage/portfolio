require "json"

class Blog
    def initialize(filename)
        @title = ""
        @date = ""
        @tags = []
        @url = "/blog/#{filename}"
        parse_file(filename)
    end

    def to_map()
        return { :title =>  @title, :date => @date, :tags => @tags, :url => @url}
    end

    def parse_file(filename) 
        File.open(filename, "r") do |f|
            status = :search_comment
            f.readlines.each do |line|
                case status 
                when :search_comment
                    if line.include? "<!--" 
                        status = :comment
                    end
                when :comment
                    if line.include? "Date:" 
                        line.chomp().split().each do |l| 
                            @date = l unless l == "Date:"
                        end
                    end
                    if line.include? "Title:" 
                        line.chomp().split().each do |l| 
                            @title = l unless l == "Title:"
                        end
                    end
                    if line.include? "Tag:" 
                        line.chomp().split().each do |l| 
                            @tags.push(l) unless l == "Tag:"
                        end
                    end
                else
                end
            end
        end
    end
end

class BlogConfig
    def initialize()
        @blogs = []
    end

    def add(filename) 
        @blogs.push(Blog.new(filename))
    end

    def to_json() 
        return JSON.generate({ :blogs => @blogs.map.with_index { |b, i| map = b.to_map(); map[:id] = i; map }})
    end
end

BlogDir = "./*"
blog_config = BlogConfig.new()

Dir.glob(BlogDir) do |fname|
    if File.extname(fname) == ".md" 
        File.open(fname, "r") do |f|
            blog_config.add(fname)
        end
    end
end

File.open("./blog.json", "w") do |f|
    f.puts(blog_config.to_json()) 
end