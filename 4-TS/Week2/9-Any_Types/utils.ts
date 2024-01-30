const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
import { LoyaltyUser } from './enums'

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    if (reviewTotalDisplay)
        reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning == true) {
        if (returningUserDisplay)
            returningUserDisplay.innerHTML = 'back'
    }
    if (userNameDisplay)
        userNameDisplay.innerHTML = userName
}