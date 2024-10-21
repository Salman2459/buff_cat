'use client'
import React, { useState } from 'react'




const EducationalResources = () => {
    let [activatedTab, setactivatedTab] = useState('depositfee')

    return (

        <div>
                    <div className='bg-[#170A05] min-h-[100vh] w-full pt-6 '>
                        <div className="p-5  sm:p-7 md:p-10">
                            <h1 className="text-[20px] md:text-[30px] Jost text-white font-semibold">How Buffcat Works:</h1>
                            <p className="text-[14px] md:text-[16px] Jost text-white font-normal">
                                Buffcat is a decentralized platform designed to give users full control over their assets by locking tokens for a predetermined period. It enables users to participate in staking, earn rewards, and securely lock liquidity, all while maintaining transparency across centralized and decentralized exchanges.
                            </p>

                            <h1 className="text-[20px] md:text-[22px] Jost text-white font-semibold mt-10">Core Features:</h1>
                            <div className="flex gap-2 mt-2">
                                <img className="w-[27px] h-[24px]" src="/arrow.png" alt="Arrow" />
                                <p className=" text-[14px] md:text-[16px] Jost text-white font-normal">
                                    <span className="font-bold">Token Locking:</span> Users can lock their tokens for anywhere from 30 to 3,000 days. The longer the lock duration, the greater the rewards.
                                </p>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <img className="w-[27px] h-[24px]" src="/arrow.png" alt="Arrow" />
                                <p className=" text-[14px] md:text-[16px] Jost text-white font-normal">
                                    <span className="font-bold">Partial Unlocking:</span> Unlike other platforms, Buffcat allows users to unlock a portion of their locked tokens before the lock period ends, subject to a small penalty.
                                </p>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <img className="w-[27px] h-[24px]" src="/arrow.png" alt="Arrow" />
                                <p className="text-[14px] md:text-[16px] Jost text-white font-normal">
                                    <span className="font-bold">Claimable Rewards:</span> Users earn rewards over time, which can be claimed or auto-compounded back into their locked assets.
                                </p>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <img className="w-[27px] h-[24px]" src="/arrow.png" alt="Arrow" />
                                <p className="text-[14px] md:text-[16px] Jost text-white font-normal">
                                    <span className="font-bold">Transparency:</span> With Buffcat, all locking activities are publicly visible, ensuring transparency and trust for all users and institutions.
                                </p>
                            </div>

                            <h1 className=" text-[20px] md:text-[22px] Jost text-white font-semibold mt-10">Why Lock Tokens on Buffcat?</h1>
                            <div className="flex gap-2 mt-2">
                                <img className="w-[27px] h-[24px]" src="/arrow.png" alt="Arrow" />
                                <p className=" text-[14px]  md:text-[16px] Jost text-white font-normal">Secure liquidity while earning passive income.</p>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <img className="w-[27px] h-[24px]" src="/arrow.png" alt="Arrow" />
                                <p className=" text-[14px] md:text-[16px] Jost text-white font-normal">Encourage responsible and long-term token holding.</p>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <img className="w-[27px] h-[24px]" src="/arrow.png" alt="Arrow" />
                                <p className=" text-[14px]  md:text-[16px] Jost text-white font-normal">Maintain transparency for institutional and retail investors.</p>
                            </div>

                            <div className="mt-4">
                                <h1 className=" text-[20px] md:text-[30px] Jost text-white font-semibold mt-10">The Benefits of Long-Term Holding</h1>
                                <p className=" text-[14px] md:text-[16px] Jost text-white font-normal mt-4">
                                    In a volatile market, emotional and impulsive trading often leads to losses. Buffcat promotes the principles of disciplined investing by encouraging users to lock their assets for a set duration, which offers both stability and growth potential.
                                </p>
                            </div>

                            <div className="mt-4">
                                <h1 className="text-[20px] md:text-[30px] Jost text-white font-semibold mt-10">Why Invest for the Long Term?</h1>
                                <p className="text-[14px] md:text-[16px] Jost text-white font-normal mt-2">
                                    <span className="font-bold">1. Mitigate Market Volatility:</span>Short-term market fluctuations can lead to hasty decisions. By locking your tokens, you avoid panic selling during market downturns.
                                </p>
                                <p className=" text-[14px] md:text-[16px] Jost text-white font-normal mt-2">
                                    <span className="font-bold">2. Compounding Rewards:</span>The longer you lock your tokens, the more rewards you earn. Buffcat’s auto-compound feature maximizes your earnings by reinvesting your rewards back into your locked tokens.
                                </p>
                                <p className="text-[14px] md:text-[16px] Jost text-white font-normal mt-2">
                                    <span className="font-bold">3. Capital Growth:</span> Historical data shows that long-term holders tend to outperform day traders over time. Buffcat incentivizes disciplined investors with higher rewards for longer lock durations.
                                </p>
                                <p className="text-[14px] md:text-[16px] Jost text-white font-normal mt-2">
                                    <span className="font-bold">4. Minimize Transaction Costs:</span> Frequent trades lead to higher transaction fees. By locking your assets for longer periods, you reduce the need for continuous buying and selling, saving on fees.</p>
                            </div>
                            <h1 className="text-[20px] md:text-[22px] Jost text-white font-semibold mt-7">Key Takeaways:</h1>
                            <div className="flex gap-2 mt-2">
                                <img className="w-[27px] h-[24px]" src="/arrow.png" alt="Arrow" />
                                <p className="text-[14px] md:text-[16px] Jost text-white font-normal">
                                    <span className="font-bold">Time in the Market vs. Timing the Market:</span> It’s nearly impossible to consistently time the market perfectly. Staying invested and letting your tokens grow over time through Buffcat is a strategy proven to work better for most investors.
                                </p>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <img className="w-[27px] h-[24px]" src="/arrow.png" alt="Arrow" />
                                <p className="text-[14px] md:text-[16px] Jost text-white font-normal">
                                    <span className="font-bold">Patience Pays:</span> Buffcat rewards users who demonstrate patience and trust in their investments, turning long-term holds into profitable ventures.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


    )
}

export default EducationalResources