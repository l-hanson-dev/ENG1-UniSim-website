# UniSim Site

## Getting Started

The site is built with [Jekyll](https://jekyllrb.com/docs/), a static website generator running off of Ruby. 

To get started with running Jekyll, just follow the instructions on their website [here](https://jekyllrb.com/docs/installation/)

## Production site

Everything in the ```_site``` folder when built on your local machine is periodically uploaded to [eng1.realjamesh.co.uk](https://eng1.realjamesh.co.uk) which has the login credientials ```user:pass```

## PDF's and other files

Place them in the ```media``` folder and they will be accessable under the ```/media/``` directory.

## Contribution Guide

If you want to make changes to the site there are a couple of things to consider: 

Do your work on a seperate branch with a meaningful name, i.e. `update-location` or `change-logo`. 

When you are done with your changes, then simply make a pull request to `master`
and the PR will undergo a review, and then be merged in if successful. 

If you have a change to the core site (i.e. CSS stylings that effect more than just your post, layout options, etc) then feel free to make an issue with what you think should change! 


### Jekyll Quick Start

I always forget the commands for installing Jekyll and getting the enviornment setup. 
Here they are!  

#### Ubuntu

For Ubuntu, use the following commands to install jekyll and ruby and get 
the site up and running locally! 

```
sudo apt-get install ruby ruby-dev build-essential

echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME=$HOME/gems' >> ~/.bashrc
echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

```
gem install jekyll bundler
```

```
gem sources --add https://rubygems.org/
```

Confirm your ruby install

```
ruby -v
```

If you run into issues try this command:

```
bundle update jekyll
gem update jekyll
```

To run Jekyll:
```
jekyll serve --watch
```