# apiDoc

## catalogue：
[1、register](#1register)<br/>
[2、login](#2login)<br/>
[3、updateUser](#3updateUser)<br/>
[4、getUser(based on cookie)](#4getUser(based on cookie))<br/>
[5、getUserList](#5getUserList)<br/>
[6、get current user's chatList](#6get current user's chatList)<br/>
[7、 update information's status to be read](#7update information's status to be read)<br/>


## 1、register

### reqURL：
	localhost:4000/register

### reqMethod：
	POST

### paramsType

	|params		|isRequired |type     |description
	|username    |Y       |string   |username
	|password    |Y       |string   |password
	|type        |Y       |string   |type

### response：
	success:
	    {
	      "code": 0,
	      "data": {
	        "_id": "5ae133e621388d262c8d91a6",
	        "username": "ds2",
	        "type": "dashen"
	      }
	    }
	fail
	    {
	      "code": 1,
	      "msg": "user already exist"
	    }


## 2、login

### reqURL：
	localhost:4000/login

### reqMethod：
	POST

### paramsType

	|params		|isRequired |type     |description
	|username    |Y       |string   |username
	|password    |Y       |string   |password

### response：
	success:
	    {
	      "code": 0,
	      "data": {
	        "_id": "5ae1338a21388d262c8d91a5",
	        "username": "ds1",
	        "type": "dashen",
	        "__v": 0
	      }
	    }
	fail
	    {
	      "code": 1,
	      "msg": "wrong username or wrong password"
	    }

## 3、updateUser

### reqURL：
	localhost:4000/update

### reqMethod：
	POST

### paramsType：

	|params		|isRequired |type     |description
	|header    |Y       |string   |header
	|info      |N       |string   |info
	|post      |N       |string   |position
	|salary    |N       |string   |salary
	|company   |N       |string   |company

### response：
	success:
	    {
		    "code": 0,
		    "data": {
		        "header": "header2",
		        "info": "react/vue",
		        "post": "web-killer",
		        "company": "Oracle",
		        "salary": "18K",
		        "_id": "5ae1f088d37a442b749fc143",
		        "username": "laoban1",
		        "type": "laoban"
		    }
		}
	fail
	    {
	      "code": 1,
	      "msg": "login first"
	    }


## 4、getUser(based on cookie)

### reqURL：
	localhost:4000/getUser

### reqMethod：
	GET

### paramsType

	none

### response：
	success:
	    {
		    "code": 0,
		    "data": {
		        "_id": "5ae1f088d37a442b749fc143",
		        "username": "laoban1",
		        "type": "laoban",
		        "__v": 0,
		        "salary": "18K",
		        "company": "Oracle",
		        "post": "web-killer",
		        "info": "react/vue",
		        "header": "header2"
		    }
		}
	fail
	    {
	      "code": 1,
	      "msg": "login first"
	    }


## 5、getUserList

### reqURL：
	localhost:4000/userList

### reqMethod：
	GET

### paramsType: query

	|params		|isRequired |type     |description
	|type       |Y       |string   |type(dashen/laoban)

### response：
	{
	    "code": 0,
	    "data": [
	        {
	            "_id": "5ae1d5d19151153d30e008fd",
	            "username": "ds2",
	            "type": "dashen",
	            "__v": 0
	        },
	        {
	            "_id": "5ae1ddd99ca58023d82351ae",
	            "username": "aa",
	            "type": "dashen",
	            "__v": 0,
	            "post": "web-killer",
	            "info": "Rect/Vue",
	            "header": "header1"
	        }
	    ]
	}
	

## 6、get current user's chatList

### reqURL：
	localhost:4000/msglist

### reqMethod：
	GET

### paramsType
	none

### response：
	{
	    "code": 0,
	    "data": {
	        "users": {
	            "5ae1d5d19151153d30e008fd": {
	                "username": "ds2"
	            },
	            "5ae1ddd99ca58023d82351ae": {
	                "username": "aa",
	                "header": "header1"
	            },
	            "5ae1df049ca58023d82351af": {
	                "username": "aa2"
	            },
	            "5ae1e72aa072c522e024b18e": {
	                "username": "bb",
	                "header": "header3"
	            },
	            "5ae1f088d37a442b749fc143": {
	                "username": "laoban1",
	                "header": "header2"
	            }
	        },
	        "chatMsgs": [
				{
	                "read": false,
	                "_id": "5ae1f3c3a95eb824841199f1",
	                "from": "5ae1f088d37a442b749fc143",
	                "to": "5ae1ddd99ca58023d82351ae",
	                "content": "aa",
	                "create_time": 1524757443374,
	                "__v": 0
	            }
			]
	    }
	}

## 7、 update information's status to be read
### reqURL：
	localhost:4000/readmsg

### reqMethod：
	post

### paramsType
	|params		|isRequired |type     |description
	|from       |Y       |string   |id of sedding user
### response：
	{code: 0, data: 2}