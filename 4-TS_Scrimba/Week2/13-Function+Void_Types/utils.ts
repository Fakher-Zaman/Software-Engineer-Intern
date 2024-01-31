const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
import { LoyaltyUser } from './enums'

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser): void {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    if (reviewTotalDisplay)
        reviewTotalDisplay.innerHTML = value.toString() + ' Review' + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        if (returningUserDisplay)
            returningUserDisplay.innerHTML = 'back'
    }
    if (userNameDisplay)
        userNameDisplay.innerHTML = userName
}

export function showDetails(value: boolean | Permissions, element: HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

export function makeMultiple(value: number): string {
    if (value > 1 || value == 0) {
        return 's';
    } else {
        return '';
    }
}