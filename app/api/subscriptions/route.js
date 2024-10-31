// pages/api/subscriptionPlans.js
import connectMongoDB from "../../../libs/mongodb"; // MongoDB 연결 함수
//import SubscriptionPlans from '../../../models/subscriptionPlansSchema'; // SubscriptionPlans 모델

export default async function handler(req, res) {
  await connectMongoDB(); // MongoDB에 연결

  if (req.method === 'GET') {
    try {
      const plans = await SubscriptionPlans.find(); // 구독 계획 가져오기
      res.status(200).json({ subscriptionPlans: plans }); // 성공적으로 가져온 구독 계획 반환
    } catch (error) {
      console.error("Failed to fetch subscription plans", error); // 오류 로그
      res.status(500).json({ error: 'Failed to fetch subscription plans' }); // 오류 응답
    }
  } else if (req.method === 'POST') {
    try {
      const newPlan = new SubscriptionPlans(req.body); // 요청 본문으로 새 구독 계획 생성
      const savedPlan = await newPlan.save(); // 새 계획 저장
      res.status(201).json(savedPlan); // 성공적으로 저장한 계획 반환
    } catch (error) {
      console.error("Failed to create subscription plan", error); // 오류 로그
      res.status(500).json({ error: 'Failed to create subscription plan' }); // 오류 응답
    }
  } else {
    // 지원하지 않는 메서드에 대한 응답
    res.setHeader('Allow', ['GET', 'POST']); // 지원하는 메서드 설정
    res.status(405).end(`Method ${req.method} Not Allowed`); // 메서드가 지원되지 않음을 알림
  }
}
