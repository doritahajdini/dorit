import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import {
  Appbar,
  Text,
  Button,
  TextInput,
  Card,
  Checkbox,
  RadioButton,
  Snackbar,
  Portal,
  Dialog,
  Menu,
  FAB,
  Searchbar,
  Avatar,
  Chip,
  HelperText,
} from "react-native-paper";

export default function Paper() {
  const [emri, setEmri] = useState("");
  const [fjalekalimi, setFjalkalimi] = useState("");
  const [checked, setChecked] = useState(false);
  const [kursi, setKursi] = useState("react-native");
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [kerko, setKerko] = useState("");

  const kaGabim = emri.length > 0 && emri.length < 3;

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="React Native Paper" />
        <Appbar.Action icon="magnify" onPress={() => alert("Search")} />
        <Appbar.Action icon="account-cash" onPress={() => alert("More")} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text variant="displayMedium" style={styles.title}>
          Mire se vini ne react native paper
        </Text>

        <Text variant="titleMedium" style={styles.paragraph}>
          Ketu kemi disa komponente baze qe perdoren shpesh.
        </Text>

        <Text variant="titleMedium" style={styles.sectionTitle}>
          Avatar
        </Text>

        <View style={styles.row}>
          <Avatar.Icon size={70} icon="account" />
          <Avatar.Text size={50} label="FP" style={styles.avatarText} />
        </View>

        <Text variant="titleMedium" style={styles.sectionTitle}>
          Button
        </Text>

        <Button mode="text" onPress={() => alert("Text Button")}>
          Text Button
        </Button>

        <Button
          mode="outlined"
          onPress={() => alert("Outlined Button")}
          style={styles.spaceTop}
        >
          Outlined Button
        </Button>

        <Button
          mode="contained"
          icon="camera"
          onPress={() => alert("Contained Button")}
          style={styles.spaceTop}
        >
          Open Camera
        </Button>

        <Text variant="titleMedium" style={styles.sectionTitle}>
          Text Input
        </Text>

        <TextInput
          label="Emri"
          mode="outlined"
          value={emri}
          onChangeText={setEmri}
          placeholder="shkruaj emrin"
          style={styles.input}
        />

        <HelperText type="error" visible={kaGabim}>
          Emri duhet te kete te pakten 3 shkronja
        </HelperText>

        <TextInput
          label="Fjalekalimi"
          mode="outlined"
          value={fjalekalimi}
          onChangeText={setFjalkalimi}
          secureTextEntry
          left={<TextInput.Icon icon="lock" />}
          style={styles.input}
        />

        <Text variant="titleMedium" style={styles.sectionTitle}>
          Searchbar
        </Text>

        <Searchbar
          placeholder="Kerko..."
          value={kerko}
          onChangeText={setKerko}
          style={styles.input}
        />

        <Text variant="titleMedium" style={styles.sectionTitle}>
          Card
        </Text>

        <Card style={styles.card}>
          <Card.Title title="kursi i programimit" subtitle="React Native" />

          <Card.Content>
            <Text variant="bodyMedium">
              ky eshte nje shembull i card ne react native
            </Text>
          </Card.Content>

          <Card.Actions>
            <Button onPress={() => alert("lexo me shume")}>
              lexo me shume
            </Button>

            <Button
              mode="contained"
              onPress={() => setSnackbarVisible(true)}
            >
              Regjistrohu
            </Button>
          </Card.Actions>
        </Card>

        <Text variant="titleMedium" style={styles.sectionTitle}>
          Checkbox
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => setChecked(!checked)}
            color="blue"
          />
          <Text>pranoj kushtet</Text>
        </View>

        <RadioButton.Group
          onValueChange={(value) => setKursi(value)}
          value={kursi}
        >
          <RadioButton.Item label="React Native" value="react-native" />
          <RadioButton.Item label="PHP" value="php" />
          <RadioButton.Item label="Python" value="python" />
        </RadioButton.Group>

        <Text variant="titleMedium" style={styles.sectionTitle}>
          Chip
        </Text>

        <View style={styles.rowWrap}>
          <Chip icon="language-javascript" style={styles.chip}>
            javascript
          </Chip>
          <Chip icon="language-php" style={styles.chip}>
            PHP
          </Chip>
          <Chip icon="language-python" style={styles.chip}>
            Python
          </Chip>
          <Chip icon="language-java" style={styles.chip}>
            Java
          </Chip>
          <Chip icon="language-c" style={styles.chip}>
            C
          </Chip>
        </View>

        <Text variant="titleMedium" style={styles.sectionTitle}>
          Menu
        </Text>

        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <Button mode="outlined" onPress={() => setMenuVisible(true)}>
              Hap Menune
            </Button>
          }
        >
          <Menu.Item onPress={() => setMenuVisible(false)} title="Profili" />
          <Menu.Item onPress={() => setMenuVisible(false)} title="Settings" />
          <Menu.Item onPress={() => setMenuVisible(false)} title="Dil" />
        </Menu>

        <Text variant="titleMedium" style={styles.sectionTitle}>
          Dialog
        </Text>

        <Button mode="contained" onPress={() => setDialogVisible(true)}>
          Hap Dialog
        </Button>

        <Portal>
          <Dialog
            visible={dialogVisible}
            onDismiss={() => setDialogVisible(false)}
          >
            <Dialog.Title>Konfirmim</Dialog.Title>

            <Dialog.Content>
              <Text variant="bodyMedium">
                A deshironi ta mbyllni kete dialog?
              </Text>
            </Dialog.Content>

            <Dialog.Actions>
              <Button onPress={() => setDialogVisible(false)}>Jo</Button>
              <Button onPress={() => setDialogVisible(false)}>Po</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </ScrollView>

      <Portal>
        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          duration={3000}
          action={{
            label: "Mbyll",
            onPress: () => setSnackbarVisible(false),
          }}
        >
          Veprimi u realizua me sukses
        </Snackbar>
      </Portal>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => alert("FAB clicked")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "black",
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  title: {
    marginBottom: 10,
    color: "black",
  },
  paragraph: {
    marginBottom: 10,
    color: "black",
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  spaceTop: {
    marginTop: 10,
  },
  input: {
    marginBottom: 10,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  avatarText: {
    marginLeft: 10,
  },
  rowWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  card: {
    marginTop: 10,
  },
});