
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import MenuItems from '../../../shared/menuItems/MenuItems';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <section className='mb-12'>
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 mb-4'>
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}>
                    </MenuItems>)
                }
            </div>
            <div className='text-center mt-4'>
                <button className='btn btn-outline  border-0 border-b-4'>View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;