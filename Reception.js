// Sample data for guest information and room status
const guestInfo = {
    name: "Nafisa Nawar",
    roomNumber: 101,
    checkInDate: "2024-03-15",
    checkOutDate: "2024-03-18"
};

const roomStatus = {
    totalRooms: 100,
    occupiedRooms: 50,
    availableRooms: 50
};

// Display guest information and room status
document.getElementById('guestInfo').innerHTML = `
    <p><strong>Name:</strong> ${guestInfo.name}</p>
    <p><strong>Room Number:</strong> ${guestInfo.roomNumber}</p>
    <p><strong>Check-In Date:</strong> ${guestInfo.checkInDate}</p>
    <p><strong>Check-Out Date:</strong> ${guestInfo.checkOutDate}</p>
`;

document.getElementById('roomStatus').innerHTML = `
    <p><strong>Total Rooms:</strong> ${roomStatus.totalRooms}</p>
    <p><strong>Occupied Rooms:</strong> ${roomStatus.occupiedRooms}</p>
    <p><strong>Available Rooms:</strong> ${roomStatus.availableRooms}</p>
`;

// Check-In functionality
document.getElementById('checkInButton').addEventListener('click', () => {
    // Add check-in logic here
    alert('Guest Checked-In Successfully!');
});

// Check-Out functionality
document.getElementById('checkOutButton').addEventListener('click', () => {
    // Add check-out logic here
    alert('Guest Checked-Out Successfully!');
});