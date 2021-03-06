import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import LayoutCards from 'components/commons/LayoutCards'
import styles from './textCardContact.scss'

const TextCardContact = ({ phone, email, title }) => {
  const { t } = useTranslation('profileUser')
  return (
    <LayoutCards>
      <div className={styles.contactInformation}>
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>
          {t('common.phone')}: {phone}
        </div>
        <div className={styles.info}>
          {t('common.email')}: {email}
        </div>
      </div>
    </LayoutCards>
  )
}

TextCardContact.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
}

export default TextCardContact
