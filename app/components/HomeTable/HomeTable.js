'use client'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"; 
import './table.css'
import Link from 'next/link'

const HomeTable = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            easing: "ease-in-out", 
            once: true, 
            mirror: false,
        });
    }, []);
    return (
        <>
            <div className="table-container" data-aos="fade-up">
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Bagging</th>
                            <th>Staking</th>
                            <th>Yield Farming</th>
                            <th>Liquidity Mining</th>
                            <th>Trading</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Earning Potential</td>
                            <td>Low Risk, High Reward</td>
                            <td>Single token rewards</td>
                            <td>High reward, but risk of impermanent loss</td>
                            <td>Moderate rewards, tied to trading fees and incentives</td>
                            <td>High risk, high reward</td>
                        </tr>
                        <tr>
                            <td>Market Stability</td>
                            <td>Reduces sell pressure by locking tokens</td>
                            <td>Neutral or no impact</td>
                            <td>Increases liquidity but adds volatility</td>
                            <td>Enhances liquidity but amplifies volatility</td>
                            <td>Adds volatility to the market</td>
                        </tr>
                        <tr>
                            <td>Flexibility</td>
                            <td>Unlock and lock anytime, no penalties</td>
                            <td>Fixed staking periods</td>
                            <td>Highly flexible, but high effort</td>
                            <td>High flexibility, but tokens are exposed to impermanent loss</td>
                            <td>Instant liquidity but high stress</td>
                        </tr>
                        <tr>
                            <td>Risk Level</td>
                            <td>Low – the only risk is the token you choose to lock</td>
                            <td>Low – consistent rewards but limited</td>
                            <td>Medium – subject to impermanent loss and smart contract risk</td>
                            <td>Medium – exposed to impermanent loss and trading volume fluctuations</td>
                            <td>High – market timing is critical</td>
                        </tr>
                        <tr>
                            <td>User Effort</td>
                            <td>Minimal – lock any token</td>
                            <td>Can only lock supported tokens</td>
                            <td>High – requires constant management of LP positions</td>
                            <td>Moderate – managing liquidity pairs and monitoring pools</td>
                            <td>High – requires constant monitoring</td>
                        </tr>
                        <tr>
                            <td>Reward Type</td>
                            <td>Multiple tokens (diversified portfolio)</td>
                            <td>Single token</td>
                            <td>LP rewards in two tokens</td>
                            <td>Trading fees + liquidity mining incentives</td>
                            <td>Profits from trades (if successful)</td>
                        </tr>
                        <tr>
                            <td>Target Audience</td>
                            <td>Long, mid, and short-term holders, high-cap and low-cap coin communities</td>
                            <td>Long-term holders</td>
                            <td>Active DeFi users, liquidity providers</td>
                            <td>Advanced DeFi users, liquidity miners</td>
                            <td>Short-term speculators</td>
                        </tr>
                        <tr>
                            <td>Innovation</td>
                            <td>New DeFi category – Bagging</td>
                            <td>Established staking model</td>
                            <td>Popular but resource-intensive</td>
                            <td>Vital for DeFi but requires expertise</td>
                            <td>Traditional, time-sensitive</td>
                        </tr>
                    </tbody>
                </table>


            </div>
            <button className='text-white bg-gradient-to-r from-[#EFCB97] to-[#F3933F] px-[25px] py-[15px]  rounded-md m-auto !mt-8 block max-w-[200px]'><Link href={'/MainHome'}>Start Bagging Today</Link></button>
        </>
    )
}

export default HomeTable