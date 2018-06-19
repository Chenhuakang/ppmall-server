package com.ppmall.service.impl;

import java.util.concurrent.ConcurrentLinkedQueue;

import com.ppmall.redis.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ppmall.common.ServerResponse;
import com.ppmall.component.ThreadPoolManager;
import com.ppmall.pojo.Product;
import com.ppmall.rabbitmq.producer.ISecKillMessageProducer;
import com.ppmall.service.ISecKillService;

@Service
public class SecKillServiceImpl implements ISecKillService {
	private static ConcurrentLinkedQueue<Product> queue = new ConcurrentLinkedQueue<>();// 队列

	@Autowired
	ThreadPoolManager tpm;
	
	@Autowired
	private ISecKillMessageProducer iSecKillMessageProducer;

	@Autowired
	RedisUtil redisUtil;

	@Override
	public synchronized ServerResponse createOrder(int productId) {
		// TODO Auto-generated method stub
		int count = Integer.valueOf(redisUtil.get("count").toString());
		if (count > 0) {
//			tpm.processOrders("帆帆帆帆" + count);
//			
			iSecKillMessageProducer.sendMessage("SecKill", count);
			redisUtil.decr("count", 1);
			return ServerResponse.createSuccessMessage("抢购成功");
		}
		return ServerResponse.createSuccessMessage("抢购失败");
	}

}