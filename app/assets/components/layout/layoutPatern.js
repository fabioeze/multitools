import styles from './layout.module.css';
import Image from 'next/image';
import Header from '../header/header';
import Ferramentas from '../menu/ferramentas/ferramentas';
import stylesGlobal from '@/app/assets/styles/global.module.css';
import Ads from '@/app/assets/components/ads/ads';
import PropTypes from 'prop-types';

const LayoutPatern = ({ page, children }) => {
    return (
        <div>
            <Header page={page} />
            <div className={stylesGlobal.container}>
                <section>
                    <Ferramentas />
                </section>
                <section>
                    {children}
                </section>
                <section>
                    <Ads />
                </section>
            </div>
        </div>
    );
};

LayoutPatern.propTypes = {
    page: PropTypes.any.isRequired,
    children: PropTypes.node.isRequired,
};

export default LayoutPatern;