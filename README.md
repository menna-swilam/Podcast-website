## Podcast-website
Using mongodb database we built a podcats website API through which you can access alot of infromation about a certain podcast.
## You have a lot of different queries: 
### For Podcast
1- through ***/api/podcasts/*** and a **get** query you can get all the availabe podcasts in the databse.    
2- through ***/api/podcasts/*** and a **post** query you can add a new podcast.     
3- through ***/api/podcasts/:id*** and a **put** query you can edit a certain podcast.    
4- through ***/api/podcasts/:id*** and a **delete** query you can delete a certain podcast.       
5- through ***/api/podcasts/:name*** and a **get** query you can access certain podcast by name.    
6- through ***/api/podcasts/:name/suggest*** and a **get** query you can access certain podcast by name and have a suggestion based on the certain category.
7- through ***/api/podcasts/:id/category*** and a **get** query you can find out the category of a certain podcast. 
8- through ***/api/podcasts/:id/seasons*** and a **get** query you can get the given podcast seasons.
9- through ***/api/podcasts/:category/allPodcasts*** and a **get** query you can get all podcasts having the same category.
10- through ***/api/podcasts/:id/podcaster*** and a **get** query you can find out the name of the podcaster presenting a certain podcast. 

### For Podcaster
11- through ***/api/podcaster/*/*** and a **get** query you can get all the podcasters in the databse.
12- through ***/api/podcaster/sort*** and a **get** query you can get all podcasters sorted by thier ratings.
13- through ***/api/podcaster/:id*** and a **get** query you can get certain podcaster by id.
14- through ***/api/podcaster/:name*** and a **get** query you can get certain podcaster by name.  
15- through ***/api/podcaster/*** and a **post** query you can add a new podcaster.
16- through ***/api/podcaster/:id*** and a **put** query you can edit a certain podcaster.    
17- through ***/api/podcaster/:id*** and a **delete** query you can delete a certain podcaster.

### For Category     
18- through ***/api/category/*** and a **get** query you can get all the availabe categories in the databse.        
19- through ***/api/category/:id*** and a **get** query you can access certain category by id.    
20- through ***/api/category/*** and a **post** query you can add a new category.         
21- through ***/api/category/:id*** and a **put** query you can edit a certain category.           
22- through ***/api/category/:id*** and a **delete** query you can delete a certain category. 

### For Season
23- through ***/api/season/*** and a **get** query you can get all the availabe seasons in the databse. 
24- through ***/api/season/:name*** and a **get** query you can access certain saeson by name.
25- through ***/api/season/ep/:episode*** and a **get** query you can access certain season by its episode numbers.
26- through ***/api/season/*** and a **post** query you can add a new season.
27- through ***/api/season/:id*** and a **put** query you can edit a certain season.
28- through ***/api/season/:id*** and a **delete** query you can delete a certain season. 








