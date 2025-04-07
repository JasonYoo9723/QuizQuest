// src/stores/certification.js
import { defineStore } from 'pinia'

export const useCertificationStore = defineStore('certification', {
  state: () => ({
    selectedCert: {
      id: 'realtor',
      name: '공인중개사',
    },
    certifications: [
      { id: 'realtor', name: '공인중개사' },
      { id: 'it-engineer', name: '정보처리산업기사' },
      // 이후 추가 예정
    ]
  }),
  actions: {
    setCertification(cert) {
      this.selectedCert = cert
    }
  }
})
