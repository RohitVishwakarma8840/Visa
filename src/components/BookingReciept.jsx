  import React from "react";
  import { Document, Page, Text, StyleSheet, View } from "@react-pdf/renderer";

  const styles = StyleSheet.create({
    page: {
      padding: 0,
      fontSize: 11,
      fontFamily: "Helvetica",
      backgroundColor: '#f5f5f5',
    },
    ticket: {
      margin: 40,
      backgroundColor: '#ffffff',
      borderRadius: 12,
      overflow: 'hidden',
      border: '2px solid #e0e0e0',
    },
    header: {
      backgroundColor: '#10b981',
      padding: 25,
      textAlign: 'center',
    },
    headerIcon: {
      fontSize: 32,
      marginBottom: 8,
    },
    headerTitle: {
      fontSize: 24,
      color: '#ffffff',
      fontWeight: 'bold',
      marginBottom: 4,
    },
    headerSubtitle: {
      fontSize: 12,
      color: '#ffffff',
      opacity: 0.9,
    },
    contentSection: {
      padding: 30,
    },
    divider: {
      borderBottom: '2px dashed #e0e0e0',
      marginVertical: 20,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#374151',
      marginBottom: 15,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    detailsGrid: {
      marginBottom: 20,
    },
    fieldRow: {
      flexDirection: 'row',
      marginBottom: 12,
      alignItems: 'center',
    },
    fieldLabel: {
      fontSize: 10,
      color: '#6b7280',
      width: 100,
      textTransform: 'uppercase',
      letterSpacing: 0.3,
    },
    fieldValue: {
      fontSize: 12,
      color: '#111827',
      fontWeight: 'bold',
      flex: 1,
    },
    gameHighlight: {
      backgroundColor: '#ecfdf5',
      padding: 15,
      borderRadius: 8,
      marginBottom: 20,
      borderLeft: '4px solid #10b981',
    },
    gameText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#059669',
      textAlign: 'center',
    },
    footer: {
      backgroundColor: '#f9fafb',
      padding: 20,
      textAlign: 'center',
      borderTop: '1px solid #e5e7eb',
    },
    footerText: {
      fontSize: 11,
      color: '#6b7280',
      marginBottom: 5,
    },
    thankYouText: {
      fontSize: 13,
      color: '#374151',
      fontWeight: 'bold',
      marginBottom: 8,
    },
    barcodeSection: {
      marginTop: 15,
      paddingTop: 15,
      borderTop: '1px solid #e5e7eb',
    },
    barcodeText: {
      fontSize: 9,
      color: '#9ca3af',
      textAlign: 'center',
      letterSpacing: 2,
    },
    dateTimeBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    infoBox: {
      flex: 1,
      backgroundColor: '#f3f4f6',
      padding: 12,
      borderRadius: 6,
      marginHorizontal: 5,
    },
    infoBoxLabel: {
      fontSize: 9,
      color: '#6b7280',
      marginBottom: 4,
      textTransform: 'uppercase',
    },
    infoBoxValue: {
      fontSize: 13,
      color: '#111827',
      fontWeight: 'bold',
    },
  });

  const BookingReceipt = ({ booking }) => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.ticket}>
            {/* Header */}
            <View style={styles.header}>
              {/* <Text style={styles.headerIcon}>⚽</Text> */}
              <Text style={styles.headerTitle}>TURF BOOKING</Text>
              <Text style={styles.headerSubtitle}>Official Receipt</Text>
            </View>

            {/* Content */}
            <View style={styles.contentSection}>
              {/* Game Highlight */}
              <View style={styles.gameHighlight}>
                <Text style={styles.gameText}>{booking?.location || 'N/A'}</Text>
              </View>

              {/* Date & Time */}
              <View style={styles.dateTimeBox}>
                <View style={styles.infoBox}>
                  <Text style={styles.infoBoxLabel}>Date</Text>
                  <Text style={styles.infoBoxValue}>{booking?.date || ''}</Text>
                </View>
                <View style={styles.infoBox}>
                  <Text style={styles.infoBoxLabel}>Time</Text>
                  <Text style={styles.infoBoxValue}>{booking?.time || ''}</Text>
                </View>
              </View>

              <View style={styles.divider} />

              {/* Booking Details */}
              <Text style={styles.sectionTitle}>Booking Details</Text>
              <View style={styles.detailsGrid}>
                <View style={styles.fieldRow}>
                  <Text style={styles.fieldLabel}>Booked By</Text>
                  <Text style={styles.fieldValue}>{booking?.userName || 'N/A'}</Text>
                </View>
                <View style={styles.fieldRow}>
                  <Text style={styles.fieldLabel}>Turf Location</Text>
                  <Text style={styles.fieldValue}>{booking?.location || 'N/A'}</Text>
                </View>
              </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.thankYouText}>Thank You for Your Booking </Text>
              <Text style={styles.footerText}>Please present this receipt at the venue</Text>
              <Text style={styles.footerText}>For any queries, contact our support team</Text>
              
              <View style={styles.barcodeSection}>
                <Text style={styles.barcodeText}>|||  ||  |||  |  ||  |||  ||  |  |||  ||</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );
  };

  export default BookingReceipt;