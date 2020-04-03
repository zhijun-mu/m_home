import  * as redisPool from  "redis-connection-pool"
import {conf} from "./redis_conf"
export const  REDIS=redisPool("myredispool",conf);

export  function set(key,val,time=180){
	return new Promise(function(resolve,reject){
	
		REDIS.set(key,val,function(err,data){
			if(err){
				console.log(err);
				reject(err);
			}else{
				REDIS.expire(key,time);
				resolve(data);
				//console.log("看看里边是什么",data);
			}
		})
	});
   
}

export function get(key){
	
	return new Promise(function(resolve,reject){
		REDIS.get(key,function(err,data){
			  if(err){
				   reject(err)
				   ///resolve(0);
				  console.log("查询出现错误")
			  }else{
				  resolve(data);
				  //console.log("查询出来数据啦",data);
			  }
		})
		
	})	
}

