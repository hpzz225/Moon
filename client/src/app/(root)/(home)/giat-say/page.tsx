import ContactForm from '@/components/_components-reuse/ContactForm';
import ContentHeader from '@/components/_components-reuse/ContentHeader';
import FeeDelivery from '@/components/_components-reuse/FreeDelivery';
import Banner from '@/components/_components-reuse/Banner';
import { PriceTable } from '@/components/_components-reuse/PriceTable';

import ServiceIntro from '@/components/_components-reuse/IntroSection';
import ServiceProcess from '@/components/_components-reuse/ServiceProcess';

import React from 'react';

const GiatSay = () => {
    const services = [
        {
            title: 'QUẦN ÁO',
            subtitle:
                'Áo thun, thể thao, áo khoác, Quần Jean, Quần tây Nam - Nữ ...v..v.. ',
            price: '10K',
            quantity: '1kg',

            imageUrl: '/images/quanao.png',
            buttonLabel: 'Đặt dịch vụ',

            note: [
                '*Số Kg được cân sau khi đồ đã được giặt và sấy khô.',
                '*Giặt sấy nhanh trong ngày : +10% phí dịch vụ',
            ],
        },
        {
            title: 'CHĂN, DRAP, MÙNG',
            subtitle: 'Chăn, Mền, Gối',
            price: '20k',
            quantity: '1kg',
            imageUrl: '/images/chandrapmung.png',
            buttonLabel: 'Đặt dịch vụ',

            note: [
                '*Số Kg được cân sau khi đồ đã được giặt và sấy khô.',
                '*Giặt sấy nhanh trong ngày : +10% phí dịch vụ',
                '*Giặt sấy nhanh trong ngày : +10% phí dịch vụ',
                ' Đây là một đoạn văn bản rất dài, nó sẽ bị cắt nếu vượt quá ba dòng. Đây là đoạn văn bản thử nghiệm để kiểm tra tính năng line-clamp trong Tailwind CSS, và nếu quá dài, phần còn lại sẽ bị ẩn đi và không hiển thị.',
            ],
        },
        {
            title: 'GẤU BÔNG, TOPPER',
            subtitleIcon: '/images/star.png',

            subtitle: 'Trên 1kg: +10k phí dịch vụ',
            price: '10k',
            quantity: '1kg',
            imageUrl: '/images/gaubongtopper.png',
            buttonLabel: 'Đặt dịch vụ',

            note: [
                'Số Kg được cân sau khi đồ đã được giặt và sấy khô.',
                '*Giặt sấy nhanh trong ngày : +10% phí dịch vụ',
            ],
        },
        {
            title: 'GIẶT KHĂN SPA',
            subtitle: 'Nhận giặt khăn cho tiệm Spa, Khách sạn, Salon tóc',
            price: '10k',
            quantity: '1kg',
            imageUrl: '/images/giatkhanspa.png',
            buttonLabel: 'Đặt dịch vụ',

            note: [
                'Số Kg được cân sau khi đồ đã được giặt và sấy khô.',
                '*Giặt sấy nhanh trong ngày : +10% phí dịch vụ',
            ],
        },
        {
            title: 'GIẶT KHĂN BÀN',
            subtitle:
                'Nhận giặt tẩy trắng tất cả các loại khăn nhà hàng, khách sạn.',
            price: '15k',
            quantity: '1kg',
            imageUrl: '/images/giatkhanban.png',
            buttonLabel: 'Đặt dịch vụ',

            note: [
                'Số Kg được cân sau khi đồ đã được giặt và sấy khô.',
                '*Giặt sấy nhanh trong ngày : +10% phí dịch vụ',
            ],
        },
        {
            title: 'MÀN, RÈM',
            subtitleIcon: '/images/star.png',
            subtitle: 'Nhận tháo lắp màn, rèm cửa: +20k phí dịch vụ',
            price: '20k',
            quantity: '1kg',
            imageUrl: '/images/manrem.png',
            buttonLabel: 'Đặt dịch vụ',

            note: [
                'Số Kg được cân sau khi đồ đã được giặt và sấy khô.',
                '*Giặt sấy nhanh trong ngày : +10% phí dịch vụ',
            ],
        },
    ];
    return (
        // <section className="bg-white">
        <>
            <Banner imageUrl="/images/logo-dich-vu.png" />
            {/* <div className="container mx-auto "> */}
            <ServiceIntro
                imageUrl={'/images/giatsaylaylien.png'}
                title="Giật Sấy Lấy Liền!"
                description="Khi bạn có công việc bận rộn không còn thời gian giặt giũ, hoặc phòng trọ không có máy giặt, hãy giao đồ cho MOON và tiết kiệm thời gian đó cho gia đình hoặc bản thân mình. Hãy cho hết tất cả quần áo dơ của bạn vào trong túi, MOON sẽ giặt sạch sẽ, sấy khô thơm tho và gấp quần áo của bạn gọn gàng. Sẵn sàng để bạn cho vào tủ quần áo với giá cả cực kì hợp lý và cạnh tranh."
                isImageFirst={true}
            />
            <ContentHeader title="Bảng Giá" iconSrc="/images/symbol.png" />
            <PriceTable items={services} layoutType="grid" />

            <ContentHeader
                title="QUY TRÌNH DỊCH VỤ"
                iconSrc="/images/symbol.png"
            />
            <ServiceProcess />
            <FeeDelivery />
            <ContactForm />
            {/* </div> */}
        </>
    );
};

export default GiatSay;
