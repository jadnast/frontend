import { NextRequest, NextResponse } from 'next/server';
import { deleteCookie } from 'cookies-next';

export async function GET(req: NextRequest) {
    // Удаление куки
    const response = NextResponse.redirect(req.headers.get('referer') || '/');
    deleteCookie("accessToken");
    deleteCookie("refreshToken");

    return response;
}