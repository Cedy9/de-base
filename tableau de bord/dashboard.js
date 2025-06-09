// Gestion des données utilisateur
class DashboardManager {
    constructor() {
        this.userData = {
            vehicle: {
                model: 'BMW Serie 1',
                year: '2020',
                fuel: 'Essence',
                mileage: 45230,
                plate: 'AB-123-CD',
                nextMaintenance: {
                    inKm: 2500,
                    percentage: 70
                }
            },
            name: 'Thomas',
            nextAppointment: {
                date: '2025-05-15',
                time: '14:30',
                type: 'Pack Hiver',
                location: 'Garage Central'
            },
            vehicleHealth: {
                score: 85,
                lastCheck: '2025-03-10'
            },
            loyaltyPoints: {
                current: 350,
                nextTier: 500
            },
            appointments: [
                {
                    type: 'Révision complète',
                    date: '2025-03-10',
                    status: 'Terminé',
                    icon: 'wrench'
                },
                {
                    type: 'Vidange',
                    date: '2025-02-15',
                    status: 'Terminé',
                    icon: 'oil-can'
                }
            ],
            documents: [
                {
                    name: 'Facture - Mars 2025',
                    type: 'pdf',
                    url: '#'
                },
                {
                    name: 'Devis - Pack Hiver',
                    type: 'pdf',
                    url: '#'
                }
            ]
        };
        this.notifications = [
            {
                title: 'Rappel de rendez-vous',
                message: 'Rendez-vous le 15 Mai'
            },
            {
                title: 'Document disponible',
                message: 'Nouvelle facture disponible'
            }
        ];
    }

    // Initialisation du tableau de bord
    init() {
        this.updateWelcomeMessage();
        this.updateNextAppointment();
        this.updateVehicleHealth();
        this.updateLoyaltyPoints();
        this.updateAppointmentHistory();
        this.updateDocuments();
        this.setupNotifications();
    }

    // Mise à jour du message de bienvenue
    updateWelcomeMessage() {
        const welcomeNameElement = document.querySelector('h1 span');
        if (welcomeNameElement) {
            welcomeNameElement.textContent = this.userData.name;
        }
    }

    // Mise à jour du prochain rendez-vous
    updateNextAppointment() {
        const appointment = this.userData.nextAppointment;
        const dateElement = document.querySelector('.bg-[#2a2a2a] .text-[#F97316].text-xl');
        const detailsElement = document.querySelector('.bg-[#2a2a2a] .text-gray-400');
        
        if (dateElement && detailsElement) {
            dateElement.textContent = this.formatDate(appointment.date);
            detailsElement.textContent = `${appointment.time} - ${appointment.type}`;
        }
    }

    // Mise à jour de l'état du véhicule
    updateVehicleHealth() {
        const scoreBar = document.querySelector('.bg-green-500');
        const scoreText = document.querySelector('.text-green-500');
        
        if (scoreBar && scoreText) {
            scoreBar.style.width = `${this.userData.vehicleHealth.score}%`;
            scoreText.textContent = `${this.userData.vehicleHealth.score}%`;
        }
    }

    // Mise à jour des points de fidélité
    updateLoyaltyPoints() {
        const pointsElement = document.querySelector('.text-[#F97316].text-xl');
        const nextTierElement = document.querySelector('.text-gray-400');
        
        if (pointsElement && nextTierElement) {
            pointsElement.textContent = `${this.userData.loyaltyPoints.current} points`;
            nextTierElement.textContent = `Prochain palier: ${this.userData.loyaltyPoints.nextTier} pts`;
        }
    }

    // Mise à jour de l'historique des rendez-vous
    updateAppointmentHistory() {
        // À implémenter selon les besoins
    }

    // Mise à jour des documents
    updateDocuments() {
        // À implémenter selon les besoins
    }

    // Configuration des notifications
    setupNotifications() {
        const notificationsBtn = document.getElementById('notificationsBtn');
        if (notificationsBtn) {
            notificationsBtn.addEventListener('click', () => {
                this.showNotifications();
            });
        }
    }

    // Affichage des notifications
    showNotifications() {
        const messages = this.notifications.map(notif => 
            `${notif.title}: ${notif.message}`
        ).join('\n');
        alert(messages);
    }

    // Utilitaire de formatage de date
    formatDate(dateString) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const dashboard = new DashboardManager();
    dashboard.init();
});
