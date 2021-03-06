source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# added by Jiyun
gem 'pry-rails'           # rails console upgraded version
gem 'awesome_print'       # pretty console
gem 'faker'               # dummy content auto generate
gem 'ckeditor'            # text editor
gem 'devise'              # login
gem 'authority'           # check authority
gem 'omniauth-facebook'   # for facebook login

# will_paginate was eliminated since it stops js after clicking next pages. (URL change issue)
# 차라리 네이버쇼핑 상품목록창처럼 페이지네이션 안 하고 쭉 아래로 스크롤 내리는 게 사용자에게 더 편할수도 있음
# 대신 데스크탑/모바일 상단에 항상 네비게이션 바가 위치함
#gem 'will_paginate'       # for pagination

gem 'net-ssh'             # image upload via form tag
gem 'carrierwave'         # image upload via form tag
gem 'fog'                 # image upload via form tag

gem 'paperclip'           # image upload via ckeditor
gem 'mini_magick'         # image upload via ckeditor

gem 'acts_as_votable'     # for mypage Jjim list

#gem 'sunspot_rails'       # for search system
#gem 'sunspot_solr'        # for search system
#gem 'progress_bar'        # for search system

gem 'figaro'              # for deploy

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.1'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
# Use Puma as the app server
gem 'puma', '~> 3.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# See https://github.com/rails/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
