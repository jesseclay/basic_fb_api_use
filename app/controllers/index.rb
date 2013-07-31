get '/' do


  
  # @profile = @graph.get_object("me")
  # @friends = @graph.get_connections("me", "friends")
  # @graph.put_connections("me", "feed", :message => "This is my first ever automated post to my wall!")
  # Look in app/views/index.erb
  erb :index
end

post '/search_user' do
  graph = Koala::Facebook::API.new
  user = graph.get_object(params[:username])
  pic = graph.get_picture(params[:username],:type => 'large')
  
  content_type :json
  {user: user, pic: pic}.to_json
end
